import { Component, OnInit } from '@angular/core';
import { VotacionesService } from '../../shared/services/votaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public votaciones_service: VotacionesService) {}

  ngOnInit() {}
}
