import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../shared/interfaces/usuario';
import { LoginService } from '../../shared/services/login.service';
import { DataService } from '../../shared/services/data.service';
import { AlertsService } from 'src/app/shared/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private dataService: DataService,
    private alertService: AlertsService,
  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }

    this.loginService
      .login(this.usuario)
      .then((data) => {
        console.log(data);

        this.alertService.loading().finally(() => {
          this.alertService.alerta('Bienvenido', 'Nos encanta tenerte por acá de nuevo ' + data.user.displayName);
        })
        this.router.navigateByUrl('/partidas');
        this.dataService.correrVoz(true);
      })
      .catch((error) => {
        this.alertService.alerta('Error', error);
      });

  }
}
