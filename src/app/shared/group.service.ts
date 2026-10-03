import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Group {
  group_id: string;
  name: string;
}

// Groups (branches, chapters, departments...) are defined by the backend.
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups$?: Observable<Group[]>;

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    if(!this.groups$){
      this.groups$ = this.http.get<Group[]>(`${environment.apiUrl}/group/get-groups`).pipe(shareReplay(1));
    }
    return this.groups$;
  }

  getGroupNames(): Observable<{ [groupId: string]: string }> {
    return this.getGroups().pipe(map(groups=>{
      const names: { [groupId: string]: string } = {};
      for(const group of groups){
        names[group.group_id] = group.name;
      }
      return names;
    }));
  }
}
