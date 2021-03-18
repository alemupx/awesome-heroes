import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavList } from '../interfaces/navList';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private corredorVoz = new Subject<any>();
  private corredorSuplente = false;

  constructor(private http: HttpClient, private auth: LoginService) {}

  correrVoz(mensaje: any) {
    this.corredorVoz.next(mensaje);
  }

  traerCorredorVoz(): Observable<any> {
    return this.corredorVoz.asObservable();
  }

  getLogOutList() {
    return this.http.get<NavList[]>('../../../assets/data/loggedOut.json');
  }

  getLogInList() {
    return this.http.get<NavList[]>('../../../assets/data/loggedIn.json');
  }
}
