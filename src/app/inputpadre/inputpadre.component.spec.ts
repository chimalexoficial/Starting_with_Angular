import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpadreComponent } from './inputpadre.component';

describe('InputpadreComponent', () => {
  let component: InputpadreComponent;
  let fixture: ComponentFixture<InputpadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputpadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputpadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
