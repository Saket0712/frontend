import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompotwoComponent } from './compotwo.component';

describe('CompotwoComponent', () => {
  let component: CompotwoComponent;
  let fixture: ComponentFixture<CompotwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompotwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompotwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
