/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error403Component } from './error403.component';

describe('Error403Component', () => {
  let component: Error403Component;
  let fixture: ComponentFixture<Error403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
