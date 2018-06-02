import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonalService } from '../services/personal.service';
import { Personal } from '../models/personal.model';

@Component({
  selector: 'app-nuevopersonal',
  templateUrl: './nuevopersonal.component.html',
  styleUrls: ['./nuevopersonal.component.css']
})
export class NuevopersonalComponent implements OnInit {
  personal: Personal = new Personal();
  constructor(
    public _personalService: PersonalService
  ) { }

  ngOnInit() {
  }


  guardarPersonal(f: NgForm) {

    console.log(f.valid);
    console.log(f.value);

  }
}
