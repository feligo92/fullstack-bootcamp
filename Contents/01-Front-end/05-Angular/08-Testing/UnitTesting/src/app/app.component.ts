import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = this._data.title;

  constructor(public _data: DataService) { }

    changeTitle(newTitle:string):void{
      this._data.changeTitle(newTitle);
      this.title = this._data.title;
    }


  positiveOrNegative(numero: number): boolean {
    if (numero >= 0) {
      return true
    } else {
      return false
    }
  }
}
