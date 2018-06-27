import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePhotoComponent } from './case-photo.component';

describe('CasePhotoComponent', () => {
  let component: CasePhotoComponent;
  let fixture: ComponentFixture<CasePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
