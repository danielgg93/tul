import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user;

  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.onloggin.subscribe(() => {
      this.authSvc.getCurrentUser().then((data) => {
        this.isLogged = true;
      });
    });
  }

  onLogout() {
    this.authSvc.logout();
  }
}
