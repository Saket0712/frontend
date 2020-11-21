import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompofourComponent } from './compofour.component';

describe('CompofourComponent', () => {
  let component: CompofourComponent;
  let fixture: ComponentFixture<CompofourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompofourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompofourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
