import { Pipe, PipeTransform } from '@angular/core';
import { REPORT_STATUS_LABEL } from './app-config';

// Turns the report status from the API into a readable label.
@Pipe({
  standalone: false,
  name: 'reportStatus'
})
export class ReportStatusPipe implements PipeTransform {
  transform(status: any): string {
    return REPORT_STATUS_LABEL[String(status)] || 'Unknown';
  }
}
