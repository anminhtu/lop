import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCaseComponent } from './available-case.component';

describe('AvailableCaseComponent', () => {
  let component: AvailableCaseComponent;
  let fixture: ComponentFixture<AvailableCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
