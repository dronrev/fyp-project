import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPmfkikkComponent } from './assign-pmfkikk.component';

describe('AssignPmfkikkComponent', () => {
  let component: AssignPmfkikkComponent;
  let fixture: ComponentFixture<AssignPmfkikkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPmfkikkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPmfkikkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
