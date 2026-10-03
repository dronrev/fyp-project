import { GroupService } from 'src/app/shared/group.service';
import { inject, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from 'src/app/admin/users.service';

@Component({
  standalone: false,
  selector: 'app-lect-list-of-student',
  templateUrl: './lect-list-of-student.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./lect-list-of-student.component.css']
})
export class LectListOfStudentComponent implements OnInit {
  private groupService = inject(GroupService);
  groupNames: { [groupId: string]: string } = {};

  students:any;
  constructor(private service : UsersService) { }

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

}
