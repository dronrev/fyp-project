import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectEventComponent } from './lect-event.component';

describe('LectEventComponent', () => {
  let component: LectEventComponent;
  let fixture: ComponentFixture<LectEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectEventComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
