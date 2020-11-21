import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompothreeComponent } from './compothree.component';

describe('CompothreeComponent', () => {
  let component: CompothreeComponent;
  let fixture: ComponentFixture<CompothreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompothreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompothreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
