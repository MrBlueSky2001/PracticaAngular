import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';
import { PlaceHolder, PlaceHolderP } from '../interfaces/place-holder';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css'
})
export class ProfesoresComponent implements OnInit{
  public resultadoPeticion: any; 
  public inputIdGet: string = '';
  public url: string = "http://localhost:3000/profesores"

  constructor (private http: HttpClient, private DataServiceService: DataServiceService) {

  }

  ngOnInit(){
    this.get();
  }

  get(){
    this.http.get(this.url)
    .subscribe(data => {this.resultadoPeticion = data;
      this.DataServiceService.setJsonData(this.resultadoPeticion);
    });
  }

  get3 () {
    this.http.get<PlaceHolderP>(this.url+"/"+this.inputIdGet)
    .subscribe({
      next: (respuesta: PlaceHolderP) => {
        this.resultadoPeticion = respuesta;
        console.log(this.resultadoPeticion.usuario);
        console.log(this.resultadoPeticion.email);
        console.log(this.resultadoPeticion.modulo);
        console.log(this.resultadoPeticion.horas);
        console.log(this.resultadoPeticion.foto);
      },
      error: (err) => {console.log("error");}
    });
  }
  
  // get3 () {
  //   this.http.get<PlaceHolderP>(this.url+"/"+this.inputIdGet)
  //   .subscribe({
  //     next: (respuesta: PlaceHolderP) => {
  //       this.resultadoPeticion = respuesta;
  //       console.log(this.resultadoPeticion.id);
  //       console.log(this.resultadoPeticion.usuario);
  //       console.log(this.resultadoPeticion.email);
  //       console.log(this.resultadoPeticion.modulo);
  //       console.log(this.resultadoPeticion.horas);
  //       console.log(this.resultadoPeticion.foto);
  //     },
  //     error: (err) => {console.log("error");}
  //   });
  // }

  // get3 () {
  //   this.http.get<PlaceHolderP>(this.url+"/"+this.inputIdGet)
  //     .subscribe({
  //       next: (respuesta: PlaceHolderP) => {
  //         // Actualizar solo los datos relevantes
  //         this.resultadoPeticion = {
  //           usuario: respuesta.usuario,
  //           email: respuesta.email,
  //           modulo: respuesta.modulo,
  //           horas: respuesta.horas,
  //           foto: respuesta.foto
  //         };
  //       },
  //       error: (err) => { console.log("error"); }
  //     });
  // }
}
