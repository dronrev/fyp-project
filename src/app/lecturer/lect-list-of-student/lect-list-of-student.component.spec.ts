import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectListOfStudentComponent } from './lect-list-of-student.component';

describe('LectListOfStudentComponent', () => {
  let component: LectListOfStudentComponent;
  let fixture: ComponentFixture<LectListOfStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectListOfStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectListOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
