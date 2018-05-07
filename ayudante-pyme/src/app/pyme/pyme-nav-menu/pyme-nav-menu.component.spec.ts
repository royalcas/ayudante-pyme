
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PymeNavMenuComponent } from './pyme-nav-menu.component';

describe('PymeNavMenuComponent', () => {
  let component: PymeNavMenuComponent;
  let fixture: ComponentFixture<PymeNavMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PymeNavMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PymeNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
