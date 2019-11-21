import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title = 'UnitTesting';

  constructor() { }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  hola() {
    return "hola"
  }
}
