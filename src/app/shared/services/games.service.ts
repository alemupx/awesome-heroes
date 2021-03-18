import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  gamesList: any[];

  constructor() {
    this.gamesList = [{ name: "Shadows of Mordor" }, { name: "Omens of an apocalypse" }, { name: "the revenge of the elite Czajkowski" }]
  }

  getGamesList() {
    return this.gamesList;
  }
}
