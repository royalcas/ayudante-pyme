import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  loginWithFacebook(): Observable<any> {
    return from(this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()));
  }

  loginWithGoogle(): Observable<any> {
    return from(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }
}
