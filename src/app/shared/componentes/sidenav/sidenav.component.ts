import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavList } from '../../interfaces/navList';
import { DataService } from '../../services/data.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() main: any;

  list: Observable<NavList[]>;

  constructor(private dataService: DataService, private menu: MenuService) {}

  ngOnInit() {
    this.list = this.dataService.getMenu();
  }

  go(route: string) {
    this.menu.goTo(route);
  }
}
