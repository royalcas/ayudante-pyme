import { SecurityModule } from './../../../Users/Roger/documents/@project/ayudante-pyme/security/security.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { SharedModule } from './../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    SecurityModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [PublicNavComponent, ShowcaseComponent, PublicLayoutComponent],
  bootstrap: [PublicLayoutComponent]
})
export class PublicModule { }
