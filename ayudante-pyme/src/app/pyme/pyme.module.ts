import { PymeRoutingModule } from './pyme-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule
} from '@angular/material';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { PymeLayoutComponent } from './pyme-layout/pyme-layout.component';
import { PymeNavMenuComponent } from './pyme-nav-menu/pyme-nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    SharedModule,
    PymeRoutingModule
  ],
  declarations: [
    DashboardComponent,
    InvoiceFormComponent,
    ProviderFormComponent,
    ProviderDashboardComponent,
    InventoryDashboardComponent,
    InventoryFormComponent,
    PymeLayoutComponent,
    PymeNavMenuComponent,
    CustomerDashboardComponent,
    CustomerFormComponent
  ],
  bootstrap: [
     PymeLayoutComponent
  ]
})
export class PymeModule { }
