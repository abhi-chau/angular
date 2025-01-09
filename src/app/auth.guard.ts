import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot):boolean{
    const isAuthenticated = this.authService.isAuthenticated();
    const userRole = this.authService.getUserRole();
    const requeredRole = route.data['role'];

    if(isAuthenticated){
      if(requeredRole && requeredRole !== userRole){
       alert('Unathorized!');
       this.router.navigate(['/login']);
       return false;
      }
      return true;
    } else{
      alert('Please log in!');
      this.router.navigate(['/login']); 
      return false;
    }
  };

}

