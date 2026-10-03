import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectdashComponent } from './lectdash.component';

describe('LectdashComponent', () => {
  let component: LectdashComponent;
  let fixture: ComponentFixture<LectdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectdashComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
