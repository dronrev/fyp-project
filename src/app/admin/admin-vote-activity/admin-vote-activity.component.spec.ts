import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoteActivityComponent } from './admin-vote-activity.component';

describe('AdminVoteActivityComponent', () => {
  let component: AdminVoteActivityComponent;
  let fixture: ComponentFixture<AdminVoteActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVoteActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVoteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
