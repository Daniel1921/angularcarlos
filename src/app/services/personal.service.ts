import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PersonalService {

  constructor(
    public http: HttpClient
  ) { }

cargarPersonal() {

  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost:3000/personal';
  return this.http.get(url).map( (resp: any) => {
    console.log(resp.personalempresa);
    return resp.personalempresa;

  });

}


// ***************************
/* buscarMedicos( termino: string ) {

  let url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
  return this.http.get( url )
              .map( (resp: any) => resp.medicos );

} */


borrarPersonal( id: string) {
  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost:3000/personal/' + id;
  return this.http.delete( url );
}

}
