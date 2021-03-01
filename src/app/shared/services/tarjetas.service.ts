import { Injectable } from '@angular/core';
import { Tarjeta } from '../interfaces/tarjeta';

@Injectable({
  providedIn: 'root',
})
export class TarjetasService {
  tarjetas: Tarjeta[];

  constructor() {
    this.tarjetas = [
      {
        titulo: 'Supeman',
        contenido:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores, veniam beatae aliquid',
        url: '../../../../assets/img/superman.jpg',
      },
      {
        titulo: 'Thor',
        contenido:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores, veniam beatae aliquid',
        url: '../../../../assets/img/thor.jpg',
      },
      {
        titulo: 'Batman',
        contenido:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores, veniam beatae aliquid',
        url: '../../../../assets/img/batman.jpg',
      },
      {
        titulo: 'Spiderman',
        contenido:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolores, veniam beatae aliquid',
        url: '../../../../assets/img/spiderman.jpg',
      },
    ];
  }

  traerTarjetas() {
    return this.tarjetas;
  }
}
