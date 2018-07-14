import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente: Cliente[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns = ['cedula',
    'edad', 'sexo',
    'nombre_completo', 'precio', 'fecha_caducidad', 'acciones', 'acciones2'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public _clienteService: ClienteService
  ) { }

  ngOnInit() {
  this.cargarClientes();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

   cargarClientes() {
     this._clienteService.cargarCliente().subscribe(resp => {
       this.cliente = resp;
       console.log(resp);
       this.dataSource = new MatTableDataSource(resp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     });
   }

   borrarPersonal(cliente: Cliente) {

    swal({
      title: '¿Estas seguro de borrar al usuario?',
      text: 'el usuario a borrar es ' + cliente.nombre_completo,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this._clienteService.borrarCliente(cliente._id).subscribe (() =>  this.cargarClientes());
          swal(
            'Eliminado',
            'El usuario ha sido eliminado.',
            'success'
          );
        }
        });
   }
}
