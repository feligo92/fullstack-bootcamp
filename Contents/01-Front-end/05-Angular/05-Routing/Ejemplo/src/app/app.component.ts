import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _data:DataService) { }

  vista = 'home';

  showView(valor: string): void {
    this.vista = valor;
  }
}
