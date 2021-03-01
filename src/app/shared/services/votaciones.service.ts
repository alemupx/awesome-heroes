import { Injectable } from '@angular/core';
import { Votaciones } from '../interfaces/votaciones';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class VotacionesService {
  votaciones: Votaciones;

  constructor(private firestore: AngularFirestore) {
    this.votaciones = { votosPositivos: 0, votosNegativos: 0 };
  }

  traerVotaciones() {
    return this.firestore.collection('votos').snapshotChanges();
  }

  getVotaciones() {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('/votos')
        .snapshotChanges()
        .subscribe(
          (data) => {
            const datosConvertidos = (accion: any) => {
              return {
                id: accion.payload.doc.id,
                ...accion.payload.doc.data(),
              } as Votaciones;
            };

            resolve(data.map(datosConvertidos));
          },
          (error) => {
            console.log('Firestore Error', error);
          }
        );
    });
  }

  editarVotaciones(votaciones: Votaciones): Promise<void> {
    return this.firestore
      .collection('votos')
      .doc('6AB2rpxviTWqAU1kPiRu')
      .set(votaciones);
  }

  votoPositivo() {
    this.getVotaciones().then((data) => {
      let votacionesTemporales: Votaciones[] = data;
      votacionesTemporales[0].votosPositivos =
        votacionesTemporales[0].votosPositivos + 1;
      this.editarVotaciones(votacionesTemporales[0]);
    });
  }

  votoNegativo() {
    this.votaciones.votosNegativos++;

    this.getVotaciones().then((data) => {
      let votacionesTemporales: Votaciones[] = data;
      votacionesTemporales[0].votosNegativos =
        votacionesTemporales[0].votosNegativos + 1;
      this.editarVotaciones(votacionesTemporales[0]);
    });
  }

  estadoVotos(seleccion: boolean): number {
    this.getVotaciones().then((data) => {
      let votacionesTemporales: Votaciones[] = data;

      this.editarVotaciones(votacionesTemporales[0]);
    });

    if (seleccion) {
      return this.votaciones.votosPositivos;
    } else {
      return this.votaciones.votosNegativos;
    }
  }

  estadoVotosBarra(seleccion: boolean): number {
    if (seleccion) {
      return this.votaciones.votosPositivos;
    } else {
      return this.votaciones.votosNegativos;
    }
  }
}
