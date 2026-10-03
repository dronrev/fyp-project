import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMemberComponent } from './select-member.component';

describe('SelectMemberComponent', () => {
  let component: SelectMemberComponent;
  let fixture: ComponentFixture<SelectMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMemberComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
