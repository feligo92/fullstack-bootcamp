import { TestBed, async } from '@angular/core/testing';

import { DataService } from './data.service';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';

describe('DataService', () => {

  beforeEach(async () => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [DataService],


    }).compileComponents();

  });


  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('function hola should work', () => {
    const service = TestBed.get(DataService);
    expect(service.hola()).toEqual("hola");
  })

  //Test2
  it('should component have title variable', () => {

    const service = TestBed.get(DataService);

    //Assertion
    expect(service.title).toEqual('UnitTesting');

  })

  //Test3
  it('should method changeTitle work', () => {

    const service = TestBed.get(DataService);
    service.changeTitle('nuevoTitulo');
    //Assertion
    expect(service.title).toEqual('nuevoTitulo');

  })


});
