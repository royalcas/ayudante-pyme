import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PymeLayoutComponent } from './pyme-layout.component';

describe('PymeLayoutComponent', () => {
  let component: PymeLayoutComponent;
  let fixture: ComponentFixture<PymeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PymeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PymeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
