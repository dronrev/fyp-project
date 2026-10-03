import { TEST_IMPORTS, TEST_PROVIDERS, TEST_SCHEMAS } from 'src/testing/test-setup';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnnouncementComponent } from './edit-announcement.component';

describe('EditAnnouncementComponent', () => {
  let component: EditAnnouncementComponent;
  let fixture: ComponentFixture<EditAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnnouncementComponent ],
      imports: TEST_IMPORTS,
      providers: TEST_PROVIDERS,
      schemas: TEST_SCHEMAS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
