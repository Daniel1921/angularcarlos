import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { APP_ROUTES } from './app.routes';
import { PersonalService } from './services/personal.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NuevopersonalComponent } from './nuevopersonal/nuevopersonal.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ClienteService } from './services/cliente.service';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    NuevopersonalComponent,
    ClientesComponent,
    NuevoClienteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [PersonalService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
