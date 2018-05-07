import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';

const publicRoutes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: ShowcaseComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PublicRoutingModule { }
