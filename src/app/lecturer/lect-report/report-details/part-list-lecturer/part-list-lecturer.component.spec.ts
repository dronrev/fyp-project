import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListLecturerComponent } from './part-list-lecturer.component';

describe('PartListLecturerComponent', () => {
  let component: PartListLecturerComponent;
  let fixture: ComponentFixture<PartListLecturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartListLecturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
