import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { ListaComponent } from './components/lista/lista.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BackgroundMidComponent } from './components/background-mid/background-mid.component';
import { BackgroundDownComponent } from './components/background-down/background-down.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TipoComponent,
    ListaComponent,
    ContactoComponent,
    BackgroundMidComponent,
    BackgroundDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
