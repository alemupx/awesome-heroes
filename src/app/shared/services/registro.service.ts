import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private firestore: AngularFirestore, private fireAuthService: AngularFireAuth) {
  }

  async register(usuario: Usuario): Promise<any> {
    const resul = await this.fireAuthService.createUserWithEmailAndPassword(usuario.email, usuario.password)
    return resul;
  }

  async AgregarEnBaseDatos(id, usuario) {
    // console.log(usuario);

    return this.firestore.collection('/usuarios').doc(id).set(usuario);
  }
}
