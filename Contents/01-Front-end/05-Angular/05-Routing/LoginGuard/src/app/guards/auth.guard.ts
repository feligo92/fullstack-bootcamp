import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  token: string;

  constructor(public _router: Router, public _user: UserService) {

    this.token = this._user.dataLogin["token"]

  }



  canActivate() {
    
    if (localStorage.getItem("token") === this.token) {
      return true;
    } else {
      this._router.navigateByUrl("/login");
      return false;
    }


  }

}
