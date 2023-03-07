import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVoteActivityComponent } from './detail-vote-activity.component';

describe('DetailVoteActivityComponent', () => {
  let component: DetailVoteActivityComponent;
  let fixture: ComponentFixture<DetailVoteActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVoteActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVoteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
