import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { ClienteService } from '../services/cliente.service';
@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  constructor(
    public _clienteService: ClienteService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:prefer-const
      let id = params['id'];
      if ( id !== 'nuevo') {
        console.log(id);
       this.cargarCliente(id);
      }
      });
  }

  ngOnInit() {

  }
  cargarCliente(id) {

    this._clienteService.cargarUnCliente( id ).subscribe(resp => this.cliente = resp);
    }


  guardarCliente(f: NgForm) {

  if (f.invalid) {
    swal(
      'error en el formulario',
      'Esta invalido el formulario',
      'error'
    );
    return;

  }
    this._clienteService.guardarCliente(this.cliente).subscribe(resp => {
      console.log(resp);
      swal(
        'Cliente Guardado',
        resp.nombre_completo,
        'success'
      );
      this.router.navigate(['/cliente']);
    });
  }
}
