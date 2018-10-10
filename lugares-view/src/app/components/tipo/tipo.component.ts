import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tipos=true;
  especialidadR=false;
  cambio(event){
    console.log(event);
    if (this.tipos == true) {
      this.tipos = false;
      this.especialidadR = true;
    } 
  }
}
