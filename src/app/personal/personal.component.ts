import { Component, OnInit } from '@angular/core';
import { Personal } from '../models/personal.model';
import { PersonalService } from '../services/personal.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personales: Personal[] = [];

  constructor(
    public _personalService: PersonalService
  ) { }

  ngOnInit() {
    this.cargarPersonal();
  }



  cargarPersonal () {
  this._personalService.cargarPersonal()
  .subscribe(personales => this.personales = personales);
  }

  // ************************
/*
buscarPersonal( termino: string ) {

  if ( termino.length <= 0 ) {
    this.cargarPersonal();
    return;
  }

  this._personalService.buscarPersonal( termino )
          .subscribe( personales =>  this.personales = personales );
} */


borrarPersonal(personal: Personal) {
  swal({
    title: '¿Estas seguro de borrar al usuario?',
    text: 'el usuario a borrar es ' + personal.nombre,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, estoy seguro'
  }).then((result) => {
    console.log(result);
    if (result.value) {
      this._personalService.borrarPersonal(personal._id).subscribe (() =>  this.cargarPersonal());
        swal(
          'Eliminado',
          'El usuario ha sido eliminado.',
          'success'
        );
      }
      });

    }


}

