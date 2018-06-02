import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Personal } from '../models/personal.model';


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

cargarUnPersonal(id: string ) {

  console.log(id);
  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost:3000/personal/uno/' + id;
  return this.http.get(url)
  .map((resp: any) => {
    console.log(resp.personal, 'trae esta info');
    return resp.personal;
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

// ***************************
guardarPersonal( personal: Personal) {

  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost:3000/personal';

  if (personal._id) {
 url += '/' + personal._id ;
 return this.http.put(url, personal).map((resp: any) => {
   return resp.personal;
 });
  } else {
return this.http.post(url, personal).map((resp: any) => {
  return resp.personal;
});

}
}

}
