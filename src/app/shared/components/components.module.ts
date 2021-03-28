import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BarraComponent } from './barra/barra.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { PlayerComponentComponent } from './player-component/player-component.component';
import { FormComponent } from './form/form.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TarjetaComponent,
    TarjetasComponent,
    BarraComponent,
    NotificacionComponent,
    SidenavComponent,
    PlayersComponent,
    PlayerComponentComponent,
    FormComponent,



  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TarjetaComponent,
    TarjetasComponent,
    BarraComponent,
    NotificacionComponent,
    SidenavComponent,
    PlayersComponent,
    PlayerComponentComponent,
    FormComponent,




  ],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule { }
