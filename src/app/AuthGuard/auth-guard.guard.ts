import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth-service.service';

@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.IsloggedIn()) {
      if (state.url === '/signin' || state.url === '/signup') {
        return this.router.createUrlTree(['/onboarding']); // Redirect logged-in users to dashboard
      }
      return true; // Allow access for authenticated users to other routes
    } else {
      if (state.url === '/onboarding') {
        return this.router.createUrlTree(['/signin']); // Redirect unauthenticated users from dashboard
      }
      return true; // Allow access for unauthenticated users to other routes
    }
  }

}
