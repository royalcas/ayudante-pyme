
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormComponent } from './invoice-form.component';

describe('InvoiceFormComponent', () => {
  let component: InvoiceFormComponent;
  let fixture: ComponentFixture<InvoiceFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
