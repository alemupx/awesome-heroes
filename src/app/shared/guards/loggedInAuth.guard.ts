import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(private auth: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.estaAutenticado()) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
