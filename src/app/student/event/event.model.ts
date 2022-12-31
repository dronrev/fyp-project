export class Event{
   id?: string;
   activity_id?: string;
   name_activity?: string;
   location?: string;
   tema?: string;
   pengarah?: string;
   date?: string;
   constructor(id?:string,activity_id?:string,name_activity?:string,location?:string,tema?:string,pengarah?:string,date?:string){
    this.id = id;
    this.activity_id = activity_id;
    this.name_activity = name_activity;
    this.location = location;
    this.date = date;
   }
}
