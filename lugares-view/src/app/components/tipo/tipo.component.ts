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
  cambio(tipos){
    if(tipos==true){
      tipos = false;
    } else {
      tipos = true;
    }
  }
}
