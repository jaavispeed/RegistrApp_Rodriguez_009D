import { Component, OnInit } from '@angular/core';

import { AlumnoService } from 'src/app/service/alumno.service';

import { alumnos } from 'src/app/Interface/alumnos';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agregaralumno',
  templateUrl: './agregaralumno.page.html',
  styleUrls: ['./agregaralumno.page.scss'],
})
export class AgregaralumnoPage implements OnInit {

  newAlumnos: alumnos = {
    nombre: ""
  }

  constructor(private alumnoservice: AlumnoService, private router: Router) { }

  ngOnInit() {
  }

  crearAlumno(){
    this.alumnoservice.agregaralumno(this.newAlumnos).subscribe();
    this.router.navigateByUrl("/listar-alumno");
  }

}
