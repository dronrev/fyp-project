import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertButton, AlertDialogResult, AlertOptions, normalizeButtons } from '../alert.service';

@Component({
  standalone: false,
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AlertDialogComponent {
  buttons: AlertButton[];
  values: { [name: string]: string } = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertOptions,
    private ref: MatDialogRef<AlertDialogComponent, AlertDialogResult>) {
    this.buttons = normalizeButtons(data.buttons);
    for(const input of data.inputs || []){
      this.values[input.name] = input.value || '';
    }
  }

  // The last non-cancel button is the main action.
  isPrimary(button: AlertButton){
    const actions = this.buttons.filter(item => item.role != 'cancel');
    return actions.length > 0 && actions[actions.length - 1] == button;
  }

  close(button: AlertButton){
    this.ref.close({ button, values: this.values });
  }
}
