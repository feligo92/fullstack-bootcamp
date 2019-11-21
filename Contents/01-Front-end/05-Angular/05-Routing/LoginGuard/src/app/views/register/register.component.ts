import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public _user: UserService, public _http: HttpClient) { }

  signUp() {
    //selectores de los inputs del modal
    let name: string = (<HTMLInputElement>document.querySelector("#email")).value;
    let pass: string = (<HTMLInputElement>document.querySelector("#pass")).value;



    this._user.signUp(name, pass);

  }
}
