import { Pipe, PipeTransform } from '@angular/core';

// Looks up a group's name from a map of group ids to names.
@Pipe({
  standalone: false,
  name: 'groupName'
})
export class GroupNamePipe implements PipeTransform {
  transform(groupId: any, names: { [groupId: string]: string } | null | undefined): string {
    return names?.[groupId] || groupId || '';
  }
}
