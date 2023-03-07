import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(private service : UsersService, private alertcontrol : AlertController) { }

  students:any;
  td  !: number;
  input = new FormGroup({
    'user_id': new FormControl(null)
  })

  ngOnInit(): void {
    this.service.fetchStudent().subscribe(
      res=>{
        console.log(res);
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
                console.log(res);
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
