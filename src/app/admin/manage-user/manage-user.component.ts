import { GroupService } from 'src/app/shared/group.service';
import { inject, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { AlertService } from 'src/app/shared/alert.service';
import { map } from 'rxjs/operators';
import { UsersService } from '../users.service';


@Component({
  standalone: false,
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  private groupService = inject(GroupService);
  groupNames: { [groupId: string]: string } = {};

  constructor(private service : UsersService, private alertcontrol : AlertService) { }

  students:any;
  td  !: number;
  input = new UntypedFormGroup({
    'user_id': new UntypedFormControl(null)
  })

  ngOnInit(): void {
    this.groupService.getGroupNames().subscribe(
      names=>{
        this.groupNames = names;
      }
    )
    this.service.fetchMembers().subscribe(
      res=>{
        this.students = res;
      }
    );
  }

  async deleteUser(data:any){
    const alert = await this.alertcontrol.create({
      header: 'Delete user',
      message:'Are you sure want to delete this user?',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.input.value['user_id'] = data;
            this.service.deleteService(this.input.value).subscribe(
              res=>{
                //window.alert()
                location.reload();
              }
            )
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          },
        },
      ],
    });
    await alert.present();
  }


  async onClick2(){
    const alert = await this.alertcontrol.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //this.click1 = true;
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            //this.deleteUser()
          },
        },
      ],
    });
    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //this.roleMessage = `Dismissed with role: ${role}`;
  }
}
