import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  id: number;
  arrStudents: object[];
  constructor(public _path: ActivatedRoute, public _data: DataService) {
    this.id = this._path.snapshot.params.id
    this.arrStudents = this._data.arrStudents
  }



}
