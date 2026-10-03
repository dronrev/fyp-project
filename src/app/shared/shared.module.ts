import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { GroupNamePipe } from './group-name.pipe';
import { MaterialModule } from './material.module';
import { ReportStatusPipe } from './report-status.pipe';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [
    AlertDialogComponent,
    GroupNamePipe,
    ReportStatusPipe,
    ShellComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    AlertDialogComponent,
    GroupNamePipe,
    ReportStatusPipe,
    ShellComponent
  ]
})
export class SharedModule { }
