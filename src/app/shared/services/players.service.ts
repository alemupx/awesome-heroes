import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Player } from '../models/player.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  listaJugadores: Player[] = [];

  constructor(private firestore: AngularFirestore, public alertController: AlertController) { }

  agregarJugador(idPartida: string, player: Player) {
    return this.firestore.collection('/partidas').doc(idPartida).collection('/jugadores').add(player)
  }



  traerListaJugadores(idPartida) {
    return this.firestore.collection('/partidas').doc(idPartida).collection('/jugadores').snapshotChanges();

  }

  traerJugador(idPartida, idJugador) {
    return this.firestore.collection('/partidas').doc(idPartida).collection('/jugadores').doc(idJugador).snapshotChanges();
  }

  async eliminarJugador(idPartida, idJugador) {

    const alert = await this.alertController.create({
      header: 'Kick out player',
      message: 'Are you sure you want to kick this player out?',
      buttons: [

        {
          text: 'Yeah, I am sure',
          handler: () => {
            console.log('Confirm Okay');
            this.firestore.collection('/partidas').doc(idPartida).collection('/jugadores').doc(idJugador).delete();
          }
        },
        {
          text: 'Nah, I just change my mind',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Confirm Cancel:' + blah);
          }
        },
      ]
    });

    await alert.present();




  }


  editarJugador(idPartida, idJugador, jugador: Player): Promise<void> {
    return this.firestore.collection('/partidas').doc(idPartida).collection('/jugadores').doc(idJugador).update(jugador);
  }

}
