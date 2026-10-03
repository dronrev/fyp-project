import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUserComponent } from './pending-user.component';

describe('PendingUserComponent', () => {
  let component: PendingUserComponent;
  let fixture: ComponentFixture<PendingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingUserComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
