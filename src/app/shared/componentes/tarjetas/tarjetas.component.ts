import { Component, OnInit } from '@angular/core';
import { TarjetasService } from '../../services/tarjetas.service';
import { Tarjeta } from '../../interfaces/tarjeta';

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
