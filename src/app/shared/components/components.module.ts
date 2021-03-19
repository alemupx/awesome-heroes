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


  ],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ComponentsModule { }
