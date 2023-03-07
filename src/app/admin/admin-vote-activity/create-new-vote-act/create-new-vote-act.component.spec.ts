import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewVoteActComponent } from './create-new-vote-act.component';

describe('CreateNewVoteActComponent', () => {
  let component: CreateNewVoteActComponent;
  let fixture: ComponentFixture<CreateNewVoteActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewVoteActComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewVoteActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
