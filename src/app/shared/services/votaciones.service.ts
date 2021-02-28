import { Injectable } from '@angular/core';
import { Votaciones } from '../interfaces/votaciones';

@Injectable({
  providedIn: 'root',
})
export class VotacionesService {
  votaciones: Votaciones;

  constructor() {
    this.votaciones = { votosPositivos: 0, votosNegativos: 0 };
  }

  votoPositivo() {
    this.votaciones.votosPositivos++;
    console.log('Voto +', this.votaciones.votosPositivos);
  }

  votoNegativo() {
    this.votaciones.votosNegativos++;
    console.log('Voto -', this.votaciones.votosNegativos);
  }

  estadoVotos(seleccion: boolean): number {
    if (seleccion) {
      return this.votaciones.votosPositivos;
    } else {
      return this.votaciones.votosNegativos;
    }
  }

  estadoVotosBarra(seleccion: boolean): number {
    if (seleccion) {
      return (this.votaciones.votosPositivos);
    } else {
      return this.votaciones.votosNegativos;
    }
  }
}
