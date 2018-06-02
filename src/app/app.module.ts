import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { APP_ROUTES } from './app.routes';
import { PersonalService } from './services/personal.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarpersonalComponent } from './actualizarpersonal/actualizarpersonal.component';
import { NuevopersonalComponent } from './nuevopersonal/nuevopersonal.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ActualizarpersonalComponent,
    NuevopersonalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
