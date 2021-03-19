import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  displayBackButton;
  @Input() title: string;
  @Input() icon: string;

  constructor(private menu: MenuService, private router: Router) { }

  ngOnInit() {
    

    if (this.router.url != '/home') {
      this.displayBackButton = true;
    } else {
      this.displayBackButton = false;

    }
  }

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
