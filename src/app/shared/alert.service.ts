import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

export interface AlertButton {
  text: string;
  role?: string;
  handler?: (data?: any) => void;
}

export interface AlertInput {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
}

export interface AlertOptions {
  header?: string;
  subHeader?: string;
  message?: string;
  buttons?: (string | AlertButton)[];
  inputs?: AlertInput[];
}

export interface AlertResult {
  role?: string;
  data?: any;
}

// What the dialog component closes with.
export interface AlertDialogResult {
  button: AlertButton;
  values: { [name: string]: string };
}

export class AlertHandle {
  private resolveDismiss!: (result: AlertResult) => void;
  private dismissed = new Promise<AlertResult>(resolve => this.resolveDismiss = resolve);

  constructor(private dialog: MatDialog, private options: AlertOptions) { }

  present(): Promise<void> {
    const ref = this.dialog.open<AlertDialogComponent, AlertOptions, AlertDialogResult>(AlertDialogComponent, {
      data: this.options,
      width: '420px',
      maxWidth: '90vw',
      autoFocus: 'first-tabbable'
    });
    ref.afterClosed().subscribe(result => {
      if(result){
        const data = this.options.inputs?.length ? result.values : undefined;
        result.button.handler?.(data);
        this.resolveDismiss({ role: result.button.role, data });
      }
      else{
        // Closed with Escape or a backdrop click: treat it as a cancel.
        normalizeButtons(this.options.buttons).find(button => button.role == 'cancel')?.handler?.();
        this.resolveDismiss({ role: 'backdrop' });
      }
    });
    return Promise.resolve();
  }

  onDidDismiss(): Promise<AlertResult> {
    return this.dismissed;
  }
}

export function normalizeButtons(buttons?: (string | AlertButton)[]): AlertButton[] {
  if(!buttons?.length){
    return [{ text: 'OK' }];
  }
  return buttons.map(button => typeof button == 'string' ? { text: button } : button);
}

// Message and confirmation dialogs, shown with Angular Material.
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private dialog: MatDialog) { }

  create(options: AlertOptions): Promise<AlertHandle> {
    return Promise.resolve(new AlertHandle(this.dialog, options));
  }
}
