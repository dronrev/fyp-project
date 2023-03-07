import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEventAdminComponent } from './list-of-event-admin.component';

describe('ListOfEventAdminComponent', () => {
  let component: ListOfEventAdminComponent;
  let fixture: ComponentFixture<ListOfEventAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfEventAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEventAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
