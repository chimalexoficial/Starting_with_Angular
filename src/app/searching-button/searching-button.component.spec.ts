import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingButtonComponent } from './searching-button.component';

describe('SearchingButtonComponent', () => {
  let component: SearchingButtonComponent;
  let fixture: ComponentFixture<SearchingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
