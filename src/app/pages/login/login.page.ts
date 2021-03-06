import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/models/usuario.model';
import { LoginService } from '../../shared/services/login.service';
import { DataService } from '../../shared/services/data.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoaded = false;

  usuario: Usuario;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private dataService: DataService,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login(formulario: NgForm) {
    if (formulario.invalid) {
      this.alertService.alerta(
        'What did you expect?',
        'You did not write anything'
      );
      return;
    }

    this.loginService
      .login(this.usuario)
      .then(() => {
        this.router.navigateByUrl('/games');
        this.dataService.correrVoz(true);
      })
      .catch((error) => {
        this.alertService.alerta('Error', error.message);
      });
  }
}
