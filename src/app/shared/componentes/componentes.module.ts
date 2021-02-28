import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TarjetaComponent],
  exports: [HeaderComponent, FooterComponent, TarjetaComponent],
  imports: [CommonModule],
})
export class ComponentesModule {}
