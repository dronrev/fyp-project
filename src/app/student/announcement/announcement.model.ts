export class Announcement{
  activity_id ?: string;
  username ?:string;
  announcement_id ?: string;
  title?: string;
  subject ?: string;
  message ?: string;

  constructor(
    activity_id ?: string,
    announcement_id ?: string,
    title?: string,
    subject ?: string,
    message ?: string,
    username ?:string
  ){
    this.activity_id = activity_id;
    this.announcement_id = announcement_id;
    this.title = title;
    this.subject = subject;
    this.message = message;
    this.username = username
  }
}
