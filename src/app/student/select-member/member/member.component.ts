import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventsService } from '../../event/events.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UsersService } from 'src/app/admin/users.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private service : EventsService) {
   }

  today = new Date();
  list : any;

  clicking = 0;

   _this_is_not_ok : any;

  ngOnInit(): void {
    this.service.displayEvent().pipe(map((data:any)=>data.filter(
      (myData:any)=>myData.date >= this.today.toISOString().split('T')[0]))).subscribe(
      res=>{
        this.list = res;
        console.log(res);
      }
    );

  }

  incNumber(){
    this.clicking = this.clicking+0.2;
  }

  @ViewChild(IonModal) mymodal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name?: string;

  cancel() {
    this.mymodal.dismiss(null, 'cancel');
  }

  confirm() {
    this.mymodal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  selectActivity(data:any){
    console.log(data);
    localStorage.setItem('_deidofact_current',data)
  }
}
