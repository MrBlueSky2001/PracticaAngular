import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoServicioService {
  private informacion: any;

  constructor() { }

  setInformacion(data: any) {
    this.informacion = data;
  }

  getInformacion() {
    return this.informacion;
  }

  clearInformacion() {
    this.informacion = null;
  }
}