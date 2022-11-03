import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  roleMessage: string = "";

  constructor(private alertcontrol:AlertController,private service : UsersService) { }
  listUser:any;
  ngOnInit(): void {
    this.service.fetchStudent().subscribe(
      (res:any)=>{
        console.log(res);
        this.listUser = res;
        console.log(this.listUser[0]['matric_number']);
      }
    )
  }
  click1: boolean = false;

  onClick(){
    this.click1 = true;
  }

  async onClick2(){
    const alert = await this.alertcontrol.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.click1 = true;
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.click1 =  false;
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async selectPresident(){
    console.log(this.listUser);

    const alert = await this.alertcontrol.create({
      header : 'Select Member',
      message: `<select id="gender">
      <option>mael</option>
      <option>female</option>
      <option>others</option>
    </select>`,
    });
    alert.present();
  }
}
