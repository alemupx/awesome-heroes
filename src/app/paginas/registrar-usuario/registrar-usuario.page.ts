import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/interfaces/usuario';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/shared/services/registro.service';
import { AlertsService } from '../../shared/services/alerts.service';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  usuario: Usuario;


  constructor(

    private router: Router,
    private registroService: RegistroService,
    private alertService: AlertsService,



  ) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  registro(formulario: NgForm) {

    if (formulario.invalid) {
      return;
    }

    this.registroService
      .register(this.usuario)
      .then(() => {
        this.alertService.loading().finally(() => {
          this.alertService.alerta('Congratulations', 'You are enough brave to face this adventure, try to log in now...', 'Yikes!');
          this.router.navigateByUrl('/home');
        })
      })
      .catch((error) => {
        this.alertService.alerta('Error', error.message);
      });

  }

}


