import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListLecturerComponent } from './part-list-lecturer.component';

describe('PartListLecturerComponent', () => {
  let component: PartListLecturerComponent;
  let fixture: ComponentFixture<PartListLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartListLecturerComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
