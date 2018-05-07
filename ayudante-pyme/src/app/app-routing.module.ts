import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
    { path: '', redirectTo: '/public', pathMatch: 'full' },
    {
        path: 'public',
        loadChildren: './public/public.module#PublicModule'
    },
    {
        path: 'security',
        loadChildren: './security/security.module#SecurityModule'
    },
    {
        path: 'pyme',
        loadChildren: './pyme/pyme.module#PymeModule'
    },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
