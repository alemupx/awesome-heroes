import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerEditPage } from './player-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerEditPageRoutingModule {}
