import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TarjetaComponent,
    TarjetasComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TarjetaComponent,
    TarjetasComponent,
  ],
  imports: [CommonModule, IonicModule],
})
export class ComponentesModule {}
