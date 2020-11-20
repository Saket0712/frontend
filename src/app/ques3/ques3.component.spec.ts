import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ques3Component } from './ques3.component';

describe('Ques3Component', () => {
  let component: Ques3Component;
  let fixture: ComponentFixture<Ques3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ques3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ques3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
