import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Usuario } from '../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private fireAuthService: AngularFireAuth) {

  }



  async register(usuario: Usuario): Promise<any> {
    const resul = await this.fireAuthService.createUserWithEmailAndPassword(usuario.email, usuario.password)
    return resul;
  }
}
