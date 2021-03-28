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

    let idUsuario;

    if (formulario.invalid) {
      return;
    }

    this.registroService
      .register(this.usuario)
      .then((data) => {

        idUsuario = data.user.uid;

        this.registroService.AgregarEnBaseDatos(idUsuario, formulario.value).then((data) => {
          console.log(data);
        })



        // this.router.navigateByUrl('/home').then(() => {
        //   this.alertService.alerta('Congratulations', 'You are enough brave to face this adventure, try to log in now...', 'Yikes!');
        // })
      })
      .catch((error) => {
        this.alertService.alerta('Error', error.message);
      });





  }


}
