import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arrStudents: object[] = [
    { "name": "Ana", "bootcamp": "fullstack", "age": 35 },
    { "name": "Lina", "bootcamp": "fullstack", "age": 33 },
    { "name": "Noel", "bootcamp": "fullstack", "age": 24 },
    { "name": "Sergio", "bootcamp": "fullstack", "age": 33 },
    { "name": "Andreina", "bootcamp": "fullstack", "age": 27 },
    { "name": "Lluc", "bootcamp": "fullstack", "age": 22 },
    { "name": "Agnès", "bootcamp": "fullstack", "age": 24 },
    { "name": "Hèctor", "bootcamp": "fullstack", "age": 27 },
  ];

 
  constructor() { }
}
