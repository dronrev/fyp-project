import { Component, OnInit, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { ROLE } from 'src/app/shared/app-config';
import { AlertService } from 'src/app/shared/alert.service';
import { Group, GroupService } from 'src/app/shared/group.service';
import { UsersService } from '../users.service';

@Component({
  standalone: false,
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  imageURL = 'assets/images/profile-picture/'
  groups: Group[] = [];
  members: any[] = [];

  // The group and member chosen in the picker dialog.
  pickerGroup?: Group;
  pickedUserId: any;
  private pickerRef?: MatDialogRef<any>;

  constructor(private alertcontrol:AlertService,private service : UsersService,
    private groupService : GroupService,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    forkJoin([this.groupService.getGroups(), this.service.fetchMembers()]).subscribe(
      ([groups, members]:any)=>{
        this.groups = groups;
        this.members = members;
      }
    )
  }

  leaderOf(group: Group){
    return this.members.find((member:any)=>member.group_id == group.group_id && member.role == ROLE.leader);
  }

  candidatesOf(group: Group){
    return this.members.filter((member:any)=>member.group_id == group.group_id && member.role != ROLE.leader);
  }

  openPicker(template: TemplateRef<any>, group: Group){
    this.pickerGroup = group;
    this.pickedUserId = null;
    this.pickerRef = this.dialog.open(template, { width: '560px', maxWidth: '95vw' });
  }

  cancel() {
    this.pickerRef?.close();
  }

  confirm() {
    this.pickerRef?.close();
    if(!this.pickerGroup || !this.pickedUserId){
      return;
    }
    this.service.assignLeader({ group_id : this.pickerGroup.group_id, user_id : this.pickedUserId }).subscribe(
      res=>{
        this.load();
      }
    )
  }

  async removeLeader(group: Group){
    const leader = this.leaderOf(group);
    if(!leader){
      return;
    }
    const alert = await this.alertcontrol.create({
      header: 'Remove leader',
      message: 'Remove ' + leader.username + ' as leader of ' + group.name + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Remove',
          role: 'confirm',
          handler: () => {
            this.service.removeLeader({ group_id : group.group_id, user_id : leader.user_id }).subscribe(
              res=>{
                this.load();
              }
            )
          },
        },
      ],
    });
    await alert.present();
  }

}
