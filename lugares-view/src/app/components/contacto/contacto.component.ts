import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from '../../models/email';
import { ServicioService } from '../../service/servicio.service';

declare var M: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [ServicioService]
})
export class ContactoComponent implements OnInit {

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
  }
  // emailPrueba: Email = new Email();

  enviarEmail(form?:NgForm) {
    console.log(form.value);
    if (!form.value.nombremail || !form.value.email || !form.value.msj){
      M.toast({html: 'Formulario Vacio!'});
    } else {
      this.servicioService.enviarEmail(form.value)
        .subscribe(res => {
          this.borrarForm(form);
          M.toast({html: 'Mensaje Enviado!'})
        });
    }
  }

  borrarForm(form?: NgForm) {
    if(form) {
      form.reset();
    }
  }

}
