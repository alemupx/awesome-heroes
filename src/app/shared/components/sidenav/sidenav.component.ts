import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavList } from '../../models/navList.model';
import { DataService } from '../../services/data.service';
import { MenuService } from '../../services/menu.service';
import { LoginService } from '../../services/login.service';
import { startWith } from 'rxjs/operators';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  // Inventario de con qué voy a trabajar

  @Input() main: any;
  estaLogeado;

  vozCorrida;
  list: Observable<NavList[]>;
  corredorVoz: Observable<any>;

  // Puesta en marcha al inicio del despliegue de elementos a visualizar

  constructor(
    private dataService: DataService,
    private menu: MenuService,
    private auth: LoginService,
    private alertService: AlertsService,
  ) { }

  // Puesta en marcha al final del despliegue de elementos a visualizar

  ngOnInit() {
    this.estaLogeado = this.auth.estaAutenticado();
    if (!this.estaLogeado) {
      this.corredorVoz = this.dataService
        .traerCorredorVoz()
        .pipe(startWith(false));

    } else {
      this.corredorVoz = this.dataService
        .traerCorredorVoz()
        .pipe(startWith(true));

    }

    this.corredorVoz.subscribe((vozCorrida) => {
      this.vozCorrida = vozCorrida;

    });
  }

  go(route: string) {
    this.menu.goTo(route);
  }

  logOut() {
    this.alertService.loading();
    this.dataService.correrVoz(false);
    this.auth.logOut();
    this.menu.goTo('home');
  }
}
