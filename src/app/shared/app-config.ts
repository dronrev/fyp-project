// Product name shown across the UI. Change it here to rebrand the app.
export const APP_NAME = 'Activity Management System';
export const APP_SHORT_NAME = 'AMS';

// Roles returned by the backend at login.
// A leader is a member who leads a group; an approver is a reviewer with the final say.
export const ROLE = {
  member: 'member',
  leader: 'leader',
  reviewer: 'reviewer',
  approver: 'approver',
  admin: 'admin'
};

// The three areas of the app a user can sign in to.
export const PORTAL = {
  member: 'member',
  reviewer: 'reviewer',
  admin: 'admin'
};

export function portalOf(role: string | null): string | null {
  if(role == ROLE.member || role == ROLE.leader){
    return PORTAL.member;
  }
  if(role == ROLE.reviewer || role == ROLE.approver){
    return PORTAL.reviewer;
  }
  if(role == ROLE.admin){
    return PORTAL.admin;
  }
  return null;
}

// A report moves through these statuses in order; a rejection sends it back to draft.
export const REPORT_STATUS = {
  draft: 'draft',
  leaderReview: 'leader_review',
  reviewerReview: 'reviewer_review',
  finalApproval: 'final_approval',
  approved: 'approved'
};

export const REPORT_STATUS_LABEL: { [status: string]: string } = {
  [REPORT_STATUS.draft]: 'Draft',
  [REPORT_STATUS.leaderReview]: 'Leader review',
  [REPORT_STATUS.reviewerReview]: 'Reviewer review',
  [REPORT_STATUS.finalApproval]: 'Final approval',
  [REPORT_STATUS.approved]: 'Approved'
};
