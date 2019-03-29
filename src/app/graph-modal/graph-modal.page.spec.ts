import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphModalPage } from './graph-modal.page';

describe('GraphModalPage', () => {
  let component: GraphModalPage;
  let fixture: ComponentFixture<GraphModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
