import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectReportAttachmentComponent } from './lect-report-attachment.component';

describe('LectReportAttachmentComponent', () => {
  let component: LectReportAttachmentComponent;
  let fixture: ComponentFixture<LectReportAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectReportAttachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectReportAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
