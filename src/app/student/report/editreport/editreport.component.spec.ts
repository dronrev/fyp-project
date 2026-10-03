import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreportComponent } from './editreport.component';

describe('EditreportComponent', () => {
  let component: EditreportComponent;
  let fixture: ComponentFixture<EditreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreportComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
