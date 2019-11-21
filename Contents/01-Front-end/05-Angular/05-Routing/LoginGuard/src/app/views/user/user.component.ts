import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // token:string = this._user.dataSign["token"]

  constructor(public _user:UserService, public _router:Router) { }

  logOut() {
    
    if (typeof (Storage) !== 'undefined') {
      localStorage.removeItem("token")
    }
    this._router.navigateByUrl("/login")
  }
}
