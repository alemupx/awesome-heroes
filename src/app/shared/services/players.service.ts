import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Player } from '../models/player.model';



@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  listaJugadores: Player[] = [];

  constructor(private firestore: AngularFirestore) {

  }

  traerJugadores(idPartida) {

    this.firestore.collection('partidas').doc(idPartida).collection('jugadores').snapshotChanges().subscribe(informacionCruda => {
      this.listaJugadores = informacionCruda.map((informacionAspera) => {

        return { id: informacionAspera.payload.doc.id, ...informacionAspera.payload.doc.data() as Player };

      })
    })

  }

  traerListaJugadores(idPartida) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('partidas').doc(idPartida).collection('jugadores')
        .snapshotChanges()
        .subscribe(
          (data) => {
            const datosConvertidos = (accion: any) => {
              return {
                id: accion.payload.doc.id,
                ...accion.payload.doc.data(),
              } as Player;
            };

            resolve(data.map(datosConvertidos));
          },
        );
    });
  }



}
