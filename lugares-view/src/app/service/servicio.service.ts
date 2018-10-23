import { Injectable } from '@angular/core';
import { Lugar } from '../models/Lugar';
import { Email } from '../models/Email';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  seleccionarLugar: Lugar;
  seleccionarEmail: Email;
  lugares: {};
  readonly URL_API = 'http://localhost:3000/api/lugares';
  readonly URL_API_EMAIL = 'http://localhost:3000/api/email';

  constructor(private http: HttpClient) { 
    this.seleccionarLugar = new Lugar();
    this.seleccionarEmail = new Email();
   }
   obtenerLugares() {
     return this.http.get(this.URL_API);
   }
   crearLugar(lugar: Lugar) {
     return this.http.post(this.URL_API, lugar);
   }
   editarLugar(lugar: Lugar) {
     return this.http.put(this.URL_API + `/${lugar._id}`, lugar);
   }
   eliminarLugar(_id: String) {
     return this.http.delete(this.URL_API + `/${_id}`);
   }
   enviarEmail(email: Email) {
     return this.http.post(this.URL_API_EMAIL, email);
   }
}
