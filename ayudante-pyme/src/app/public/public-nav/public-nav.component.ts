import { AuthenticationService } from './../../security/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-public-nav',
  templateUrl: './public-nav.component.html',
  styleUrls: ['./public-nav.component.scss']
})
export class PublicNavComponent implements OnInit {

  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginWithFacebook().subscribe((loginResult: any) => {
      console.log(loginResult);
      this.router.navigate(['pyme']);
    } );
  }
}
