import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCaseDetailComponent } from './my-case-detail.component';

describe('MyCaseDetailComponent', () => {
  let component: MyCaseDetailComponent;
  let fixture: ComponentFixture<MyCaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
