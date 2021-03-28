import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  idUsuario;

  constructor(private firestore: AngularFirestore) { }

  setIdUsuario(id) {
    this.idUsuario = id;
  }

  getUsuarioId(): any {
    console.log(this.idUsuario);

    return this.idUsuario;
  }

  traerCuenta(idUsuario) {
    return this.firestore.collection('/usuarios').doc(idUsuario);
  }

}
