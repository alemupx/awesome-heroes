import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { Games } from '../models/games.model';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  listaJuegos: Games[] = [];

  constructor(private firestore: AngularFirestore) {
  }


  traerJuego(id: any) {

    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('/partidas')
        .snapshotChanges()
        .subscribe(
          (data) => {
            const datosConvertidos = (accion: any) => {
              return {
                id: accion.payload.doc.id,
                ...accion.payload.doc.data(),
              } as Games;
            };


            let listaJuegos: Games[] = [];

            for (const iterator of data.map(datosConvertidos)) {
              // console.log(iterator);
              if (iterator.id === id) {
                listaJuegos.push(iterator);
              }


            }

            resolve(listaJuegos);



          },
        );
    });
  }

  traerJuego2(id) {
    return this.firestore.collection('/partidas').doc(id).snapshotChanges();
  }


  traerJuegos() {
    return this.firestore.collection('/partidas').snapshotChanges()
  }


}
