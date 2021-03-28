import { FormGroup, NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formModel: String[];
  idJugador;

  constructor(private alertService: AlertsService) { }

  ngOnInit() {
    this.determinarFormulario(this.formModel)
  }


  determinarFormulario(foo: String[]) {

    switch (foo[0]) {
      case 'add_player':

        console.log('add_player');

        break;

      case 'edit_player':
        this.idJugador = foo[1];

        console.log('edit_player');

        break;

      default:
        break;
    }
  }

  submitForm(type: string, form: NgForm) {


    if (form.invalid) {
      this.alertService.alerta('The form is invalid', 'Check if you filled out all the required fields.');
      return;
    }
    console.log(type);
    console.log(form.value);


  }
}
