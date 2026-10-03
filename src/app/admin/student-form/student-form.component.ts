import { Group, GroupService } from 'src/app/shared/group.service';
import { ROLE } from 'src/app/shared/app-config';
import { environment } from 'src/environments/environment';
import { inject, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
@Component({
  standalone: false,
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  private groupService = inject(GroupService);
  groups: Group[] = [];
  roles = [
    { value: ROLE.member, label: 'Member' },
    { value: ROLE.leader, label: 'Leader' }
  ];
  //students: any;
  //regStu!: User;
  //data: any;

  constructor(private http : HttpClient,
     private userservice : UsersService,
     private alertcontrol : AlertService) { }

  baseurl = `${environment.apiUrl}/send-data`;

  orang : User [] = []
  error = '';
  success = '';


  ngOnInit(): void {
    this.groupService.getGroups().subscribe(
      groups=>{
        this.groups = groups;
      }
    )
  }


  sendUser(student:{name:string , mat_number:string, passwd:string, email:string,role:string,group_id:string}){
    //let body = JSON.stringify(student);
    this.http.post(this.baseurl, student, {responseType: 'text'}).subscribe(
      res=>{
      //console.log(res);

      this.notify(JSON.parse(res).message);
    })
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
