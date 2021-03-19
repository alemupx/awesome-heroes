import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';
import { Router } from '@angular/router';
import { RegistroService } from '../../shared/services/registro.service';
import { AlertsService } from '../../shared/services/alerts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
      .then((data) => {
        this.alertService.loading().finally(() => {
          console.log(data.user.uid);

          this.alertService.alerta('Congratulations', 'You are enough brave to face this adventure, try to log in now...', 'Yikes!');
          this.router.navigateByUrl('/home');
        })
      })
      .catch((error) => {
        this.alertService.alerta('Error', error.message);
      });

  }


}
