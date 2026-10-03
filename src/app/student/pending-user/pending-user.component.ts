import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  standalone: false,
  selector: 'app-pending-user',
  templateUrl: './pending-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./pending-user.component.css']
})
export class PendingUserComponent implements OnInit {

  constructor(private http : HttpClient,private alertcontrol : AlertService) { }

  list : any;
  student_data : any;

  ngOnInit(): void {
    this.http.get(`${environment.apiUrl}/pending/get-pending`,{responseType : 'text'}).subscribe(
      res=>{
        //console.log(res)
        this.list = JSON.parse(res)
        //console.log(this.list)
      }
    )
  }

  approveMember(data : any){
    //console.log(data)
    let myForm = new UntypedFormGroup({
      'name' : new UntypedFormControl(data.username),
      'passwd' : new UntypedFormControl(data.password),
      'email' : new UntypedFormControl(data.email_id),
      'mat_number' : new UntypedFormControl(data.user_id),
      'course_code' : new UntypedFormControl(data.course_id),
      'role' : new UntypedFormControl(data.role)

    })
    this.http.post(`${environment.apiUrl}/send-data`,myForm.value,{responseType : 'text'}).subscribe(
      res=>{
        this.http.post(`${environment.apiUrl}/pending/approve-pending`,myForm.value['mat_number'],{responseType : 'text'}).subscribe(
          res1=>{
            this.notify(JSON.parse(res1).message);
          }
        )
      }
    )
  }

  deleteMember(data:any){
    this.http.post(`${environment.apiUrl}/pending/delete-pending`,data.user_id,{responseType : 'text'}).subscribe(
      res=>{
        this.notify(JSON.parse(res).message)
      }
    )
  }

  async notify(serviceMessage:any){
    const messages = await this.alertcontrol.create({
      header : 'Message',
      message : serviceMessage,
      buttons : ['Continue']
    });
    await messages.present();
  }

}
