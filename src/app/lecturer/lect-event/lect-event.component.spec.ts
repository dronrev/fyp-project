import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectEventComponent } from './lect-event.component';

describe('LectEventComponent', () => {
  let component: LectEventComponent;
  let fixture: ComponentFixture<LectEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectEventComponent ]
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
