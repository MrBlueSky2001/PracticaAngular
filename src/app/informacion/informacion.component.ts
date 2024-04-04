import { Component, OnInit } from '@angular/core';
import { InfoServicioService } from '../info-servicio.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  public informacion: any;

  constructor(private infoServicio: InfoServicioService) { }

  ngOnInit(): void {
    this.informacion = this.infoServicio.getInformacion();
  }

  borrarInformacion() {
    this.infoServicio.clearInformacion();
  }

  mostrarInformacion() {
    this.informacion = null;
  }
}