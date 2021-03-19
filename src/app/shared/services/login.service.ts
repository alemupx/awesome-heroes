import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private corredorVoz = new Subject<any>();
  userToken: string;

  constructor(private fireAuthService: AngularFireAuth) {
    this.leerToken();
  }

  async login(usuario: Usuario) {
    const resul = await this.fireAuthService.signInWithEmailAndPassword(
      usuario.email,
      usuario.password
    );

    this.guardarToken(resul.user.uid);

    return resul;
  }

  async logOut() {
    const resul = await this.fireAuthService.signOut();

    localStorage.removeItem('token');
    localStorage.removeItem('expira');

    return resul;
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const hoy = new Date();
    localStorage.setItem('expira', hoy.setSeconds(3600).toString());
  }

  correrVoz(mensaje: any) {
    this.corredorVoz.next(mensaje);
  }

  traerCorredorVoz(): Observable<any> {
    return this.corredorVoz.asObservable();
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
