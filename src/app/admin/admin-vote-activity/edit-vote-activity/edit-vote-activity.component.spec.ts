import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoteActivityComponent } from './edit-vote-activity.component';

describe('EditVoteActivityComponent', () => {
  let component: EditVoteActivityComponent;
  let fixture: ComponentFixture<EditVoteActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVoteActivityComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVoteActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
