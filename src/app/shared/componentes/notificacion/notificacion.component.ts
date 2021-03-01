import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
})
export class NotificacionComponent implements OnInit {
  notificacionMovil;
  notificacionPc;
  constructor() {}

  ngOnInit() {
    this.notificacionMovil = document.getElementById('notificacion_movil');
    this.notificacionPc = document.getElementById('notificacion_pc');
  }

  cerrarNotificacion() {
    this.notificacionPc.style.display = 'none';
    this.notificacionMovil.style.display = 'none';
  }
}
