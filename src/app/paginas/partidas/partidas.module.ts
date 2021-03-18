import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartidasPageRoutingModule } from './partidas-routing.module';

import { PartidasPage } from './partidas.page';
import { ComponentesModule } from '../../shared/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartidasPageRoutingModule,
    ComponentesModule,
  ],
  declarations: [PartidasPage],
})
export class PartidasPageModule {}
