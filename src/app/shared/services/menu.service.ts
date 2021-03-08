import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private menu: MenuController, private router: Router) {}

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.toggle('first');
  }

  closeMenu() {
    this.menu.close();
  }

  goTo(route: string) {
    this.router.navigateByUrl('/' + route);
    this.menu.close();
  }
}
