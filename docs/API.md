# Backend API contract

This is what the Angular front end expects from the backend. The base URL is `apiUrl` in `src/environments/`.

## Conventions

- Every request after login carries `Authorization: Bearer <token>`.
- Paths are extension-less, for example `POST /report/new-report`.
- Unless a row says otherwise, responses are JSON. Many calls are read by the front end as text and then parsed, so the body must always be valid JSON (never empty).
- Calls that only report an outcome return `{ "message": "..." }`; the message is shown to the user as is.
- Several calls send a bare id as the request body instead of an object. They are marked "bare id".

## Roles

Stored on the user and returned at login.

| Role | Signs in to | Can do |
|---|---|---|
| `member` | Member area | Create events and reports, vote, read announcements |
| `leader` | Member area | Everything a member can, plus: review reports first, approve pending sign-ups |
| `reviewer` | Reviewer area | Review reports assigned to them, comment, send on or reject |
| `approver` | Reviewer area | Final approval of reports, dashboards, member list |
| `admin` | Admin area | Users, groups' leaders, voting, announcements |

A group has at most one `leader`. Assigning a leader sets that member's role to `leader`; removing one sets it back to `member`.

## Groups

A group is a branch, chapter or department of the organisation. Users, events and votes each belong to one group through `group_id`.

| Method | Path | Body | Response |
|---|---|---|---|
| GET | `/group/get-groups` | none | `[{ "group_id": "g1", "name": "North Chapter" }]` |
| POST | `/group/assign-leader` | `{ "group_id", "user_id" }` | `{ "message" }` |
| POST | `/group/remove-leader` | `{ "group_id", "user_id" }` | `{ "message" }` |

`GET /group/get-groups` is also called from the public sign-up page, so it must work without a token.

## Report status flow

`status` on a report is one of these strings, in order:

| Status | Meaning | Who acts | Next |
|---|---|---|---|
| `draft` | The member is writing it | member | `leader_review` (a leader's own report goes straight to `reviewer_review`) |
| `leader_review` | Waiting for the group leader | leader | `reviewer_review` |
| `reviewer_review` | Waiting for the assigned reviewer | reviewer | `final_approval`, or back to `draft` |
| `final_approval` | Waiting for the approver | approver | `approved`, or back to `draft` |
| `approved` | Finished | nobody | none |

The front end sends the new status with `PUT /report/update-status` as `{ "report_id", "status", ...report fields }`. The backend should reject a transition the caller's role is not allowed to make.

What each role's report list shows:

- member: their own reports (`POST /report/get-report-com`)
- leader: all reports in `draft` or `leader_review` (`GET /report/displayAll`, filtered in the front end)
- reviewer: their assigned reports in `reviewer_review` (`POST /report/get-report-com`)
- approver: all reports in `final_approval` (`GET /report/displayAll`, filtered in the front end)

## Authentication

| Method | Path | Body | Response |
|---|---|---|---|
| POST | `/auth/login` | `{ "email_address", "password", "user_role" }` | `{ "token", "id", "name", "email_address", "role", "group_id" }` |

- `user_role` is the area chosen on the sign-in page: `member`, `reviewer` or `admin`.
- `role` in the response is one of the five roles above, and decides where the user lands.
- On wrong credentials, return a 401 or a body without `token`; either shows "Wrong username or password."
- `token` is a JWT. The front end reads `exp` from its payload to detect an expired session.

This replaces the old `/app/login`, `/admin-login` and `/app/isTDA`.

## Users

A member object: `{ "user_id", "username", "email_id", "course_id", "group_id", "role", "profilepic" }`.
A reviewer object: `{ "reviewer_id", "name", "role" }`.

| Method | Path | Body | Response |
|---|---|---|---|
| GET | `/user/get-members` | none | member objects |
| POST | `/user/delete-user` | user id (bare id) | text |
| POST | `/user/get-personal-information` | user id (bare id) | `[{ "group_id" }]` |
| POST | `/user/get-profile` | `{ "id" }` | `[{ "profilepic" }]` |
| POST | `/user/update-profile` | form data: `avatar`, `name`, `id` | text |
| POST | `/user/pending-user` | `{ "name", "mat_number", "email", "passwd", "confirmpass", "course_code", "group_id", "role" }` | `{ "message" }` |
| GET | `/pending/get-pending` | none | pending sign-ups: `{ "user_id", "username", "password", "email_id", "course_id", "role" }` |
| POST | `/pending/approve-pending` | member id (bare id) | `{ "message" }` |
| POST | `/pending/delete-pending` | member id (bare id) | `{ "message" }` |
| POST | `/send-data` | `{ "name", "mat_number", "passwd", "email", "course_code", "group_id", "role" }` | `{ "message" }` (creates a member) |
| POST | `/reviewer/create` | `{ "name", "passwd", "email", "role" }` with role `reviewer` or `approver` | text shown to the admin |
| GET | `/reviewer/get-reviewers` | none | reviewer objects |

Renamed from the old API: `/user/get-students`, `/lecturer/sendData`, `/report/get-all-lecturer`, `/user/assignPresident`, `/user/assignPresidentLabuan`, `/user/update-role`. Renamed fields: `user_role` is now `role`, `cawangan` is now `group_id`, `lecturer_id` is now `reviewer_id`.

## Events

An event: `{ "activity_id", "name_activity", "location", "tema", "organizer", "date", "pengarah", "group_id", "username" }`.

| Method | Path | Body | Response |
|---|---|---|---|
| GET | `/event/get-event` | none | events (public: also used on the landing page) |
| GET | `/event/get-complete-event` | none | completed events |
| POST | `/add-event` | `{ "name_activity", "location", "tema", "organizer", "date", "pengarah", "value" }` where `value` is the chosen `reviewer_id` | text |
| POST | `/event/delete-event` | activity id | text |

## Reports

| Method | Path | Body | Response |
|---|---|---|---|
| GET | `/report/displayAll` | none | all reports with `report_id`, `activity_id`, `name_activity`, `title`, `location`, `status`, `username` |
| POST | `/report/get-report-com` | `{ "id", "auth" }` where `auth` is the caller's area | the caller's reports |
| POST | `/report/get-report-details` | report id (bare id) | `[report]` with all report fields and `comment` |
| POST | `/report/new-report` | report data | text |
| POST | `/report/new-add-report` | `{ activity id, user id }` | text |
| PUT | `/report/update-report` | report fields plus `report_id` | `{ "message" }` |
| PUT | `/report/update-status` | report fields plus `report_id`, `status` | JSON |
| POST | `/report/delete-report` | report id | text |
| POST | `/report/comment-report` | report fields plus `report_id`, `comment` | `{ "comment" }` |
| POST | `/report/upload-attachment` | form data | text |
| POST | `/report/get-attachment` | report id (bare id) | list of file names |

## Budget

| Method | Path | Body |
|---|---|---|
| POST | `/budget/send-pendahuluan` | introduction form |
| POST | `/budget/get-pendahuluan` | report id |
| POST | `/budget/send-laporan-kewangan` | income and spending form |
| POST | `/budget/get-budget` | report id |
| POST | `/budget/budget-count` | report id |
| GET | `/budget/get-by-date` | none |

## Participants and certificates

| Method | Path | Body |
|---|---|---|
| GET | `/e-cert/get-all-participants` | none |
| POST | `/e-cert/get-participant` | report id (bare id) |
| POST | `/e-cert/send-participant` | participant list |
| POST | `/e-cert/delete-participants` | participant id |
| POST | `/e-cert/count-participants` | report id |
| POST | `/e-cert/e-certificate` | `{ "title", ... }` generates the certificates |
| GET, POST | `/e-cert/new-download` | none, or `{ "title" }`; responds with a zip file |
| GET | `/e-cert/download-certificate` | none |

## Voting

A vote event: `{ "vote_id", "title", "date", "group_id" }`. A candidate row: `{ "vote_id", "title", "user_id", "candidate" }` where `candidate` is the position name.

| Method | Path | Body |
|---|---|---|
| GET | `/voting/get-all-vote-acti` | none |
| POST | `/voting/create-new-voting-event` | `{ "title", "date", "group_id", "detail": [{ "matric_no", "candidate" }] }` |
| POST | `/voting/edit-vote` | same, plus `vote_id` |
| POST | `/voting/select-vote-event` | vote id (bare id) |
| POST | `/voting/delete-vote` | vote id |
| POST | `/voting/delete-candidate` | candidate |
| POST | `/voting/total-candidate-event` | vote id |
| POST | `/voting/voters-voted` | vote id |
| POST | `/voting/get-candidates` | vote or activity id |
| POST | `/voting/get-vote-count` | activity id |
| POST | `/voting/enter-vote` | `{ "vote", "vote_id" }` |
| POST | `/voting/send-vote` | committee vote |
| POST | `/voting/send-vote-verify` | committee vote check |
| POST | `/voting/check-if-user-already-voting` | `{ "user_id", "name" }` or `{ "activity_id", "matric_id" }` |

Members only see votes whose `group_id` matches their own.

## Announcements

| Method | Path | Body |
|---|---|---|
| GET | `/announcement/get-all-announcement` | none |
| GET | `/announcement/get-full-announcement` | none |
| GET | `/announcement/get-admin-announcement` | none |
| GET | `/announcement/get-info-member` | none |
| POST | `/announcement/create-new-announcement` | `{ "title", "subject", "message", "auth", ... }` |
| POST | `/announcement/edit-announcement` | announcement fields |
| POST | `/announcement/delete-announcement` | announcement id |
| POST | `/announcement/email-announcement` | announcement fields |
| POST | `/announcement/save-image` | form data |
| POST | `/announcement/get-attachment` | announcement id |
