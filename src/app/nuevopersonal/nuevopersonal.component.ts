import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalService } from '../services/personal.service';
import { Personal } from '../models/personal.model';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-nuevopersonal',
  templateUrl: './nuevopersonal.component.html',
  styleUrls: ['./nuevopersonal.component.css']
})
export class NuevopersonalComponent implements OnInit {
  personal: Personal = new Personal();
  constructor(
    public _personalService: PersonalService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    activatedRoute.params.subscribe(params => {
    // tslint:disable-next-line:prefer-const
    let id = params['id'];
    if ( id !== 'nuevo') {
      console.log(id);
      this.cargarPersonal(id);
    }
    });
  }

  ngOnInit() {
  }
  cargarPersonal(id) {

  this._personalService.cargarUnPersonal( id ).subscribe(personal => this.personal = personal);
  }

  guardarPersonal(f: NgForm) {

  if (f.invalid) {
    return;
  }

  this._personalService.guardarPersonal(this.personal).subscribe(personal => {
    console.log(personal);
    swal(
      'Se ha guardado el nuevo empleado',
      personal.nombre,
      'success'
    );
  this.router.navigate(['/personal']);
  });

  }
}
