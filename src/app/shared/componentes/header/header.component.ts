import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  
  constructor(private menu: MenuService) {}

  ngOnInit() {}

  open() {
    this.menu.openMenu();
  }

  go(route: string) {
    this.menu.goTo(route);
  }

  close() {
    this.menu.closeMenu();
  }
}
