
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDashboardComponent } from './provider-dashboard.component';

describe('ProviderDashboardComponent', () => {
  let component: ProviderDashboardComponent;
  let fixture: ComponentFixture<ProviderDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
