import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectFooterComponent } from './lect-footer.component';

describe('LectFooterComponent', () => {
  let component: LectFooterComponent;
  let fixture: ComponentFixture<LectFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
