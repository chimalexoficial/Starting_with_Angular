import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHijoComponent } from './input-hijo.component';

describe('InputHijoComponent', () => {
  let component: InputHijoComponent;
  let fixture: ComponentFixture<InputHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
