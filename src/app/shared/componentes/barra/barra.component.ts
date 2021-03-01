import { Component, Input, OnInit } from '@angular/core';
import { Votaciones } from '../../interfaces/votaciones';
import { VotacionesService } from '../../services/votaciones.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss'],
})
export class BarraComponent implements OnInit {
  @Input() pc: true;
  @Input() movil: true;

  listaVotaciones: Votaciones[];

  public votosPositivos: number;
  public votosNegativos: number;
  constructor(public votaciones_service: VotacionesService) {
    this.traerVotaciones();
  }

  ngOnInit() {}

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
