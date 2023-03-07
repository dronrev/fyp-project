import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfReportAdminComponent } from './list-of-report-admin.component';

describe('ListOfReportAdminComponent', () => {
  let component: ListOfReportAdminComponent;
  let fixture: ComponentFixture<ListOfReportAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfReportAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfReportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
