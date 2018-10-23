import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { Lugar } from 'src/app/models/Lugar';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.listarLugares();
  }
  listarLugares() {
    this.servicioService.obtenerLugares()
      .subscribe(res => {
        this.servicioService.lugares = res as {};
      });
  }
}
