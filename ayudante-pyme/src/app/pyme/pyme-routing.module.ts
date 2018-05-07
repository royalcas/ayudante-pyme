import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { PymeLayoutComponent } from './pyme-layout/pyme-layout.component';

const coachingRoutes: Routes = [
    {
        path: '',
        component: PymeLayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'proveedores', component: ProviderDashboardComponent },
            { path: 'nuevo-proveedor', component: ProviderFormComponent },
            { path: 'nueva-factura', component: InvoiceFormComponent },
            { path: 'inventario', component: InventoryDashboardComponent },
            { path: 'nuevo-elemento-inventario', component: InventoryFormComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(coachingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PymeRoutingModule { }
