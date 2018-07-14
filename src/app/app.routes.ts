import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { NuevopersonalComponent } from './nuevopersonal/nuevopersonal.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ClientesComponent } from './clientes/clientes.component';




const appRoutes: Routes = [
    { path: 'nuevocliente/:id', component: NuevoClienteComponent },
    { path: 'cliente', component: ClientesComponent },
    { path: 'personal', component: PersonalComponent },
    { path: 'nuevo/:id', component: NuevopersonalComponent },
    { path: '**', component: PersonalComponent}

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
