import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AlumnoService } from 'src/app/service/alumno.service';

import { alumnos } from 'src/app/Interface/alumnos';

import { DatePipe } from '@angular/common';


import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  alumno=[] 
  newalumno: alumnos={
    nombre:"",
  }

  qrCodeString='Eliga una asignatura'
  fecha=new Date();

  fechastring: string=this.fecha.toString();

  cortado= this.datepipe.transform(this.fechastring,'dd/MM/YYYY')

  qrfecha= '';

  constructor(private alumnoservice: AlumnoService, private loadCtrl: LoadingController, private datepipe:  DatePipe, private router: Router) { }
  usuario={
    nom:'',
    fecha: this.cortado,
  }

  scannedResult: any;
  fechascaned: any;

  ngOnInit() {
    //this.loadAlumno();
    this.cortado;
  }
  GenerarQr(){
    this.qrCodeString=this.usuario.nom;
    this.qrfecha=this.usuario.fecha;
    
    
  }

  VerQr(){
    this.scannedResult = this.qrCodeString;
    this.fechascaned = this.qrfecha;
  }

}
