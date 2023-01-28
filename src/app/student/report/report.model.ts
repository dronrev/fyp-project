
export class Report{
  report_id?:string;
  title?: string;
  organizer?: string;
  location?: string;
  objective?: string;
  introduction?: string;
  involvement?: string;
  perkara_hendak_maklum?: string;
  jemputan_vip?: string;
  impak_program?:string;
  pencapaian?:string;
  rumusan?:string;
  cadangan?:string;
  budget_id?:string;
  activity_id?:string;
  user_id?: string;
  lecturer_id?: string;
  status?: string;
  comment?: string;
  name_activity?: string;
  constructor(report_id?:string,title?:string, organizer?:string,  location?: string,
    objective?: string,
    introduction?: string,
    involvement?: string,
    perkara_hendak_maklum?: string,
    jemputan_vip?: string,
    impak_program?:string,
    pencapaian?:string,
    rumusan?:string,
    cadangan?:string,
    budget_id?:string,
    activity_id?:string,
    user_id?: string,
    lecturer_id?: string,
    status?: string,
    comment?: string,
    name_activity?:string){
    this.report_id = report_id;
    this.name_activity = name_activity;
    this.location = location;
    this.objective = objective;
    this.organizer = organizer;
    this.introduction = introduction;
    this.involvement = involvement;
    this.perkara_hendak_maklum = perkara_hendak_maklum;
    this.jemputan_vip = jemputan_vip;
    this.impak_program = impak_program;
    this.pencapaian = pencapaian;
    this.rumusan = rumusan;
    this.cadangan = cadangan;
    this.budget_id = budget_id;
    this.activity_id = activity_id;
    this.user_id = user_id;
    this.lecturer_id = lecturer_id;
    this.status = status;
    this.comment = comment;
  }

  setReportHeading(title?:string,location?:string){
    this.title = title;
    this.location = location;
  }

  getReportHeading(){
    return this.title;
  }

  getReportDetail(){

  }
}
