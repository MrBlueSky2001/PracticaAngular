import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { InfoServicioService } from '../info-servicio.service';

@Component({
  selector: 'app-datos-profesores',
  templateUrl: './datos-profesores.component.html',
  styleUrls: ['./datos-profesores.component.css']
})
export class DatosProfesoresComponent {
  @Input() profesorId: string = '';
  @Input() profesorData: any;
  public mostrarCarta: boolean = false;

  constructor(
    private dataService: DataServiceService,
    private router: Router,
    private infoServicio: InfoServicioService
  ) { }

  mostrarInformacion(profesor: any) {
    this.infoServicio.setInformacion(profesor);
    this.router.navigate(['/informacion']);
  }

  vistaCartas() {
    this.mostrarCarta = !this.mostrarCarta;
  }
}