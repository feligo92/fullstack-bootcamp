import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arrStudents: object[] = [
    { "id": 0, "name": "Ana", "bootcamp": "fullstack", "age": 35 },
    { "id": 1, "name": "Lina", "bootcamp": "fullstack", "age": 33 },
    { "id": 2, "name": "Noel", "bootcamp": "fullstack", "age": 24 },
    { "id": 3, "name": "Sergio", "bootcamp": "fullstack", "age": 33 },
    { "id": 4, "name": "Andreina", "bootcamp": "fullstack", "age": 27 },
    { "id": 5, "name": "Lluc", "bootcamp": "fullstack", "age": 22 },
    { "id": 6, "name": "Agnès", "bootcamp": "fullstack", "age": 24 },
    { "id": 7, "name": "Hèctor", "bootcamp": "fullstack", "age": 27 },
  ];

  constructor() { }
}
