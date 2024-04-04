import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private jsonData: any;

  constructor() { }
  setJsonData(data: any) {
    this.jsonData = data;
  }

  getJsonData() {
    return this.jsonData;
  }

  getProfesorById(id: string) {
    return this.jsonData.find((profesor: any) => profesor.id === id);
  }
}
