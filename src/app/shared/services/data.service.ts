import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavList } from '../interfaces/navList';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {}

  getMenu() {
    return this.http.get<NavList[]>('../../../assets/data/menu.json');
  }
}
