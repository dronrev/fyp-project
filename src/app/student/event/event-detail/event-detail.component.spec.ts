import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailComponent } from './event-detail.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
