import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Cliente } from '../models/cliente.model';

@Injectable()
export class ClienteService {

  constructor(
    public http: HttpClient
  ) { }

  cargarCliente() {

    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost:3000/clientes';
    return this.http.get(url).map( (resp: any) => {
      // console.log(resp.clientes);
      return resp.clientes;

    });

  }

  // ***************************
guardarCliente( cliente: Cliente) {

  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost:3000/clientes';

  if (cliente._id) {
/*  url += '/' + personal._id ;
 return this.http.put(url, personal).map((resp: any) => {
   return resp.personal;
 }); */
  } else {
return this.http.post(url, cliente).map((resp: any) => {
  return resp.cliente;
});

}
}

borrarCliente( id: string) {
  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost:3000/cliente/' + id;
  return this.http.delete( url );
}

}
