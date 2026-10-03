import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteResultComponent } from './vote-result.component';

describe('VoteResultComponent', () => {
  let component: VoteResultComponent;
  let fixture: ComponentFixture<VoteResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteResultComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
