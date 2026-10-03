import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectListOfStudentComponent } from './lect-list-of-student.component';

describe('LectListOfStudentComponent', () => {
  let component: LectListOfStudentComponent;
  let fixture: ComponentFixture<LectListOfStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectListOfStudentComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
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
