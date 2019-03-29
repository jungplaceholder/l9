import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextModalPage } from './text-modal.page';

describe('TextModalPage', () => {
  let component: TextModalPage;
  let fixture: ComponentFixture<TextModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
