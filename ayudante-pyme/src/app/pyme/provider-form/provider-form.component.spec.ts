
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFormComponent } from './provider-form.component';

describe('ProviderFormComponent', () => {
  let component: ProviderFormComponent;
  let fixture: ComponentFixture<ProviderFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
