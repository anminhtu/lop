import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseQuestionComponent } from './case-question.component';

describe('CaseQuestionComponent', () => {
  let component: CaseQuestionComponent;
  let fixture: ComponentFixture<CaseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
