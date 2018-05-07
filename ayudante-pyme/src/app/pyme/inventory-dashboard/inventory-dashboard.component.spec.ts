
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDashboardComponent } from './inventory-dashboard.component';

describe('InventoryDashboardComponent', () => {
  let component: InventoryDashboardComponent;
  let fixture: ComponentFixture<InventoryDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
