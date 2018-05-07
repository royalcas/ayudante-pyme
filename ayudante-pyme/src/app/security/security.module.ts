import { environment } from './../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: []
})
export class SecurityModule { }
