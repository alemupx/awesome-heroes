import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
})
export class NotificacionComponent implements OnInit {
  notificacion;
  constructor() {}

  ngOnInit() {
    this.notificacion = document.getElementById('notificacion');
  }

  cerrarNotificacion() {
    this.notificacion.style.display = 'none';
  }
}
