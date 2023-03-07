import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMemberComponent } from './choose-member.component';

describe('ChooseMemberComponent', () => {
  let component: ChooseMemberComponent;
  let fixture: ComponentFixture<ChooseMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
