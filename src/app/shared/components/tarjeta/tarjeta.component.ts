import { Component, Input, OnInit } from '@angular/core';
import { VotacionesService } from '../../services/votaciones.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {
  anclaPc: boolean;
  anclaMovil: boolean;
  @Input() tarjeta: boolean;
  @Input() tarjetaRespuestaPositiva: boolean;
  @Input() tarjetaRespuestaNegativa: boolean;

  constructor(private votaciones_service: VotacionesService) {
    this.tarjetaRespuestaPositiva = false;
    this.tarjetaRespuestaNegativa = false;
  }

  ngOnInit() {}

  votoPositivo() {
    if (this.votaciones_service.estadoVotos(true) >= 0.0) {
      if (this.tarjeta) {
        this.tarjeta = false;
        this.tarjetaRespuestaPositiva = true;
        this.votaciones_service.votoPositivo();
        this.anclaPc = true;
      }
    }
  }

  votoNegativo() {
    if (this.votaciones_service.estadoVotos(false) >= 0.0) {
      if (this.tarjeta) {
        this.tarjeta = false;
        this.tarjetaRespuestaNegativa = true;
        this.votaciones_service.votoNegativo();
        this.anclaPc = true;
      }
    }
  }

  volverAVotar() {
    this.tarjetaRespuestaPositiva = false;
    this.tarjetaRespuestaNegativa = false;
    if (this.anclaPc) {
      this.tarjeta = true;
    }
  }
}
