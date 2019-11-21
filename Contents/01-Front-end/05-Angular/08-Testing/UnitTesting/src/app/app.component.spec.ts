import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './services/data.service';


describe('AppComponent', () => {      //la función describe un conjunto de test unitarios, el primer argumento que recibe es el nombre del grupo de test

  //para indicar que el proceso es asíncrono ponemos el async
  beforeEach(async () => {  //llamamos a esta funcion para que el modulo se construya cada vez.

    TestBed.configureTestingModule({   // construimos el TestBed para hacer "un modulo falso" antes de cada test y para eso le pasamos como argumento un objeto que contiene el decorador del ngModule 
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [DataService],


    }).compileComponents(); //llamamos a esta funcion para que compile todos los componentes de este módulo

  });

  // afterEach(async() => {})

  //Test1  
  it('should create component', () => { //la funcion it() describe cada test, el primer argumento es un nombre descriptivo de lo que deberia hacer el componente, el segundo es una funcion flecha con el codigo del test

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    //Assertion
    expect(FakeAppController).toBeTruthy();
    FakeAppComponent.nativeElement.remove();
  });

  //Test2
  it('should component have title variable', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    //Assertion
    expect(FakeAppController.title).toEqual('UnitTesting');
    FakeAppComponent.nativeElement.remove();
  })

  //Test3
  it('should method changeTitle work', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    FakeAppController.changeTitle('nuevoTitulo');
    //Assertion
    expect(FakeAppController.title).toEqual('nuevoTitulo');
    FakeAppComponent.nativeElement.remove();
  })

  //Test4
  it('should method positiveOrNegative return true if positive', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    //Assertion
    expect(FakeAppController.positiveOrNegative(2)).toBeTruthy();
  })

  //Test5
  it('should method positiveOrNegative return false if negative', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    //Assertion
    expect(FakeAppController.positiveOrNegative(-2)).toBeFalsy();
    FakeAppComponent.nativeElement.remove();
  })

  //Test6
  it('should html have a span with the tittle', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    FakeAppComponent.detectChanges();
    
    //Assertion
    const spanTitle = FakeAppComponent.debugElement.nativeElement.querySelector(".spanTitle");
    expect(spanTitle.textContent).toEqual(FakeAppController.title+' app is running!');
    FakeAppComponent.nativeElement.remove();
  })

  //Test7
  it('should changeTitle change span with the newtittle in html ', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    FakeAppController.changeTitle('nuevoTitulo');
    FakeAppComponent.detectChanges();
    
    //Assertion
    const spanTitle = FakeAppComponent.debugElement.nativeElement.querySelector(".spanTitle");
    expect(spanTitle.textContent).toEqual('nuevoTitulo app is running!');
    FakeAppComponent.nativeElement.remove();
  })




  it('should component.changeTitle call function service.changeTitle', () => {

    //Fixture = nativeElement + componentInstance
    const FakeAppComponent: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const FakeAppController: AppComponent = FakeAppComponent.componentInstance;
    const service = TestBed.get(DataService)
  
    
    //Assertion
    spyOn(service,'changeTitle');
    FakeAppController.changeTitle("ejemploTitle");
    expect(service.changeTitle).toHaveBeenCalled();
    FakeAppComponent.nativeElement.remove();
  })

});


