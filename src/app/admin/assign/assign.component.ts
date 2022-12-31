import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../users.service';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  roleMessage: string = "";

  presidentKK :any;
  presidentKAL :any;

  @ViewChild(IonModal)
  modal!: IonModal ;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }



  constructor(private alertcontrol:AlertController,private service : UsersService) { }
  listUser:any;
  ngOnInit(): void {
    this.service.fetchStudent().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.user_role != "PMFKIKAL" && "PMFKIKK"))).subscribe(
      (res:any)=>{
        console.log(res);
        this.listUser = res;
        //console.log(this.listUser[0]['matric_number']);
      }
    )
    this.addPresident();
    this.addPresidentKAL();
  }
  click1: boolean = false;

  onClick(){
    this.click1 = true;
  }

  radioValueLabuan : any;

  checkValue1(value:any){
    //console.log(this.radioValue);
    this.service.assignPresidentLabuan(value).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  //presidentFKILabuan
  addPresidentKAL(){
    this.service.fetchStudent().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.user_role == "PMFKIKAL")))
    .subscribe(
      res=>{
        console.log(res);
        this.click1 = true;
        this.presidentKAL = res;
        if(this.presidentKAL[0] == undefined){this.click1 = false}
      }
    )
  }

  //pmfkikal alert control
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
            this.service.updateRole(this.presidentKAL[0].user_id).subscribe(
              res=>{
                console.log(res);
              }
            )
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  radioValue : any;

  checkValue(value:any){
    //console.log(this.radioValue);
    this.service.assignPresident(value).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  //assign pmfkikk president

  click2 : boolean = false;

  addPresident(){
    this.service.fetchStudent().pipe
    (map((data:any)=>data.filter
    ((myData:any)=>myData.user_role == "PMFKIKK")))
    .subscribe(
      res=>{
        console.log(res);
        this.click2 = true;
        this.presidentKK = res;
        if(this.presidentKK[0] == undefined){this.click2 = false}
      }
    )
  }


  //pmfkikk alert control
  async onClick3(){
    const alert = await this.alertcontrol.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.click2 = true;
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.click2 =  false;
            console.log(this.presidentKK[0].user_id)
            this.service.updateRole(this.presidentKK[0].user_id).subscribe(
              res=>{
                console.log(res);
              }
            )
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
