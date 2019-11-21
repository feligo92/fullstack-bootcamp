import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  jumboText = {
    
    jumboTitle : "Hello, world!",
    jumboP : "It uses utility classes for typography and spacing to space content out within the larger container.",
    jumboButton: "Learn more"

  }

  change(){
    this.jumboText.jumboTitle = "Hola, mundo!"
    this.jumboText.jumboButton = "Saber más"
  }

  constructor() { }

  ngOnInit() {
  }

}
