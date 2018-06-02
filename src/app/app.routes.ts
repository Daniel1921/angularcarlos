import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ActualizarpersonalComponent } from './actualizarpersonal/actualizarpersonal.component';
import { NuevopersonalComponent } from './nuevopersonal/nuevopersonal.component';




const appRoutes: Routes = [
    { path: 'personal', component: PersonalComponent },
    { path: 'actualizar/:id', component: ActualizarpersonalComponent },
    { path: 'nuevo/:id', component: NuevopersonalComponent },
    { path: '**', component: PersonalComponent}

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
