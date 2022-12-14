import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaralumnoPageRoutingModule } from './agregaralumno-routing.module';

import { AgregaralumnoPage } from './agregaralumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregaralumnoPageRoutingModule
  ],
  declarations: [AgregaralumnoPage]
})
export class AgregaralumnoPageModule {}
