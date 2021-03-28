import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerAddPageRoutingModule } from './player-add-routing.module';

import { PlayerAddPage } from './player-add.page';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerAddPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlayerAddPage]
})
export class PlayerAddPageModule { }
