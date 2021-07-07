import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule,
    FormsModule
  ]
})
export class TablaModule { }
