import { Component, Input, OnInit } from '@angular/core';
import { Votaciones } from '../../models/votaciones.model';
import { VotacionesService } from '../../services/votaciones.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss'],
})
export class BarraComponent implements OnInit {
  @Input() movil;

  listaVotaciones: Votaciones[];

  public votosPositivos: number;
  public votosNegativos: number;
  constructor(public votaciones_service: VotacionesService) {
  }

  ngOnInit() {
    this.traerVotaciones();

  }

  traerVotaciones() {
    this.votaciones_service.traerVotaciones().subscribe(
      (data) => {
        const convertirDatos = (accion: any) => {
          return {
            id: accion.payload.doc.id,
            ...accion.payload.doc.data(),
          } as Votaciones;
        };
        this.listaVotaciones = data.map(convertirDatos);
      },
      (error) => {
        console.log('Firestore Error', error);
      }
    );
  }
}
