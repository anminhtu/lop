import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCaseDetailComponent } from './available-case-detail.component';

describe('AvailableCaseDetailComponent', () => {
  let component: AvailableCaseDetailComponent;
  let fixture: ComponentFixture<AvailableCaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
