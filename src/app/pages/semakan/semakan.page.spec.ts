import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemakanPage } from './semakan.page';

describe('SemakanPage', () => {
  let component: SemakanPage;
  let fixture: ComponentFixture<SemakanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemakanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemakanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
