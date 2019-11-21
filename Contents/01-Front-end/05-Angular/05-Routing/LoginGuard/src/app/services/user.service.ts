import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  dataLogin: object;
  errorLogin: object;

  dataSign: object;
  errorSign: object;

  constructor(public _http: HttpClient, public _router: Router) { }





  login(name: string, pass: string) {

    this._http.post(
      //Argumento 1: La URL
      "https://reqres.in/api/login",
      //Argumento 2: Body
      {
        "email": name,
        "password": pass
      },
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(
        (result: object) => {

          this.dataLogin = result;
          console.log(this.dataLogin)

          if (this.dataLogin["token"] != undefined) {

            if (typeof (Storage) !== 'undefined') {
              localStorage.setItem("token", this.dataLogin["token"])
            }
            
            this._router.navigateByUrl('/user');

          }

        }, (error: object) => {

          this.errorLogin = error;

          if (this.errorLogin["error"]["error"] != undefined) {

            console.log(this.errorLogin["error"]["error"]);
          }
        }
      )
  }




  signUp(name: string, pass: string): void {

    this._http.post(
      //Argumento 1: La URL
      "https://reqres.in/api/register",
      //Argumento 2: Body
      {
        "email": name,
        "password": pass
      },
      //Argumento 3: Las opciones con los headers
      { headers: new HttpHeaders({ "x-requested-with": "XMLHttpResponse" }) }
    )
      //Nos suscribimos a la llamada
      .subscribe(

        (result: object) => {

          this.dataSign = result

          if (this.dataSign["token"] != undefined) {


            console.log(this.dataSign)
          }

        },
        (error: object) => {

          this.errorSign = error;
          if (this.errorSign["error"]["error"] != undefined) {

            console.log(this.errorSign["error"]["error"])


          }

        }
      )
  }

}
