import { Component, OnInit } from '@angular/core';

import { Tarjeta } from '../../interfaces/tarjeta';
import { TarjetasService } from '../../services/tarjetas.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {
  tarjetas: Tarjeta[];

  constructor(private tarjetas_Service: TarjetasService) {
    this.tarjetas = this.traerTarjetas();
  }

  ngOnInit() {}

  traerTarjetas() {
    return this.tarjetas_Service.traerTarjetas();
  }
}
