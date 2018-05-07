import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pyme-nav-menu',
  templateUrl: './pyme-nav-menu.component.html',
  styleUrls: ['./pyme-nav-menu.component.css']
})
export class PymeNavMenuComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public afAuth: AngularFireAuth) {}

  logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['public']);
    });
  }
}
