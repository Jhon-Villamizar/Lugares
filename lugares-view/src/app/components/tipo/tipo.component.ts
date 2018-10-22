import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { Lugar } from 'src/app/models/Lugar';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.listarLugares();
  }

  listarLugares(){
    this.servicioService.obtenerLugares()
    .subscribe( res => {
      this.servicioService.lugares = res as Lugar[];
    });
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
  retroceder=false;
  inicio=false;

  // If botones
    atras(atras){
      if (this.italiana == true||this.oriental==true||this.parrilla==true) {
        this.especialidadR = true;
        this.parrilla = false;
        this.oriental = false;
        this.italiana = false;
        this.title = 'Restaurantes por especialidad';
        this.retroceder = false;
      }
      
    }
    reinicio(reinicio){
      if (this.tipos == false) {
        this.tipos = true;
        this.especialidadR = false;
        this.especialidadB = false;
        this.especialidadC = false;
        this.parrilla = false;
        this.oriental = false;
        this.italiana = false;
        this.title = 'Clasificación';
        this.retroceder = false;
      }
    }
  // If Tipos
  restaurantes(mostrarR){
    if (this.tipos == true) {
      this.tipos = false;
      this.especialidadR=true;
      this.title = 'Restaurantes por especialidad';
      this.inicio = true;
      this.retroceder = false;
    }
  }
  bares(mostrarB){
    if (this.tipos == true) {
      this.tipos = false;
      this.especialidadB=true;
      this.title = 'Bares por especialidad';
      this.inicio = true;
    }
  }
  cafes(mostrarC){
    if (this.tipos == true) {
      this.tipos = false
      this.especialidadC=true;
      this.title = 'Cafés por especialidad';
      this.inicio = true;
    }
  }
  //If espaecialidad restaurantes
  restaurante1(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.parrilla = true;
      this.title = `Restaurantes de parrilla!`;
      this.inicio = true;
      this.retroceder = true;
    }
  }
  restaurante2(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.oriental = true;
      this.title = 'Restaurantes orientales!';
      this.inicio = true;
      this.retroceder = true;
    }
  }
  restaurante3(especialidad) {
    if (this.especialidadR==true) {
      this.especialidadR = false;
      this.italiana = true;
      this.title = 'Restaurantes italianos!';
      this.inicio = true;
      this.retroceder = true;
    }
  }

}
