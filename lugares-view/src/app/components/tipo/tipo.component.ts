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

  // info inicial de clasificacion
  title = 'Clasificación';
  tipos=true;
  especialidadR=false;
  especialidadB=false;
  especialidadC=false;
  parrilla=false;
  oriental=false;
  italiana=false;

  // IF Tipos
  restaurantes(mostrarR){
    if (this.tipos == true) {
      this.tipos = false;
      this.especialidadR=true;
      this.title = 'Restaurantes por especialidad'
    }
  }
  bares(mostrarB){
    if (this.tipos == true) {
      this.tipos = false;
      this.especialidadB=true;
      this.title = 'Bares por tipo'
    }
  }
  cafes(mostrarC){
    if (this.tipos == true) {
      this.tipos = false
      this.especialidadC=true;
      this.title = 'Cafés por especialidad'
    }
  }
  //If 
  eleccion1(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.parrilla = true;
      this.title = `Restaurantes de parrilla!`
    }
  }
  eleccion2(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.oriental = true;
      this.title = 'Restaurantes orientales!'
    }
  }
  eleccion3(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.italiana = true;
      this.title = 'Restaurantes italianos!'
    }
  }

}
