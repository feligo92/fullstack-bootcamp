import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mi-form',
  templateUrl: './mi-form.component.html',
  styleUrls: ['./mi-form.component.css']
})
export class MiFormComponent {




  formData: object = {
    "salary": 12000,
    "areaTrabajo":"tecno",
    "gustosMusicales": {}
  };

  constructor() { }

  sendData(form: FormControl): void {


    if (form.valid) {
      console.log(this.formData);
    }else{
      console.log("error");
    }
  }

}
