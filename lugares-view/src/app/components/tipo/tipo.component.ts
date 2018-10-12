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
  cerveza=false;
  vino=false;
  coctel=false;
  especialidad=false;
  reposteria=false;
  chocolate=false;

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
      this.title = 'Bares por especialidad'
    }
  }
  cafes(mostrarC){
    if (this.tipos == true) {
      this.tipos = false
      this.especialidadC=true;
      this.title = 'Cafés por especialidad'
    }
  }
  //If espaecialidad restaurantes
  restaurante1(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.parrilla = true;
      this.title = `Restaurantes de parrilla!`
    }
  }
  restaurante2(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.oriental = true;
      this.title = 'Restaurantes orientales!'
    }
  }
  restaurante3(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.italiana = true;
      this.title = 'Restaurantes italianos!'
    }
  }

  //If espaecialidad bares
  bar1(especialidad) {
    if (this.especialidadB == true) {
      this.especialidadB = false;
      this.cerveza = true;
      this.title = `Bares especializados en cervezas!`
    }
  }
  bar2(especialidad) {
    if (this.especialidadB == true) {
      this.especialidadB = false;
      this.vino = true;
      this.title = 'Bares especializados en vinos!'
    }
  }
  bar3(especialidad) {
    if (this.especialidadB == true) {
      this.especialidadB = false;
      this.coctel = true;
      this.title = 'Bares especializados en cocteles!'
    }
  }

  //If espaecialidad cafes
  cafe1(especialidad) {
    if (this.especialidadC == true) {
      this.especialidadC = false;
      this.especialidad = true;
      this.title = `Cafes especializados en cafe de especialidad!`
    }
  }
  cafe2(especialidad) {
    if (this.especialidadC == true) {
      this.especialidadC = false;
      this.reposteria = true;
      this.title = 'Cafes especializados en reposteria!'
    }
  }
  cafe3(especialidad) {
    if (this.especialidadC == true) {
      this.especialidadC = false;
      this.chocolate = true;
      this.title = 'Cafes especializados en chocolate!'
    }
  }

}
