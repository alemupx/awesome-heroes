import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  id;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.id = this.accountService.getUsuarioId();
  }

}
