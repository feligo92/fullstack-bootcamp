import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public _user:UserService, public _http:HttpClient) { }


 login() {
    //selectores de los inputs del form
    let name: string = (<HTMLInputElement>document.querySelectorAll(".input_user")[0]).value;
    let pass: string = (<HTMLInputElement>document.querySelectorAll(".input_pass")[0]).value;




    // this._user.login(name, pass);
    this._user.login(name, pass);
  }
  

}
