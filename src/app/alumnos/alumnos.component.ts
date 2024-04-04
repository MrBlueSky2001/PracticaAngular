import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';
import { PlaceHolderA } from '../interfaces/place-holder';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  alumnos: any[] = [];
  // Inicializa nuevoAlumno con un objeto de tipo any
  nuevoAlumno: any = {};
  public url: string = "http://localhost:3000/alumnos"

  constructor(private http: HttpClient, private dataService: DataServiceService) { }

  ngOnInit(){
    this.obtenerAlumnos();
  }
  
  obtenerAlumnos(): void {
    // Se hace una solicitud HTTP GET. Se está utilizando el método get, y se espera que la respuesta sea un array de tipo any. 
    // this.url será de donde obtemos los datos.
    this.http.get<any[]>(this.url).subscribe(
      // Es una función flecha que se pasa como argumento a subscribe. 
      // Esta función se ejecutará cuando se reciba una respuesta exitosa de la solicitud HTTP. 
      // Toma los datos recibidos y los asigna a la propiedad alumnos del objeto actual (this.alumnos).
      (data: any[]) => {
        this.alumnos = data;
      },
      (error) => {
        console.error('Error al obtener los datos de los alumnos:', error);
      }
    );
  }

  agregarAlumno(): void {
    // Se verifica si los campos 'usuario', 'email' y 'edad' del objeto nuevoAlumno están definidos y no son nulos o vacíos.
    if (this.nuevoAlumno.usuario && this.nuevoAlumno.email && this.nuevoAlumno.edad) {
        // Se determina el nuevo ID para el alumno que se agregará.
        // Si ya hay alumnos, se calcula el nuevo ID incrementando el ID del último alumno en la lista.
        // Si no hay alumnos, se asigna 1 como ID.
        const nuevoId = this.alumnos.length > 0 ? parseInt(this.alumnos[this.alumnos.length - 1].id) + 1 : 1;

        // Se crea un nuevo objeto alumno con los datos proporcionados y el nuevo ID.
        const nuevoAlumno = {
            id: nuevoId.toString(),
            usuario: this.nuevoAlumno.usuario,
            email: this.nuevoAlumno.email,
            edad: this.nuevoAlumno.edad,
            foto: this.nuevoAlumno.foto
        };

        // Se realiza una solicitud HTTP POST para agregar el nuevo alumno a la base de datos.
        this.http.post<any>('http://localhost:3000/alumnos', nuevoAlumno)
            .subscribe(
                // Esta función se ejecuta cuando la solicitud es exitosa.
                (response) => {
                    console.log('Alumno agregado:', response);
                    // Se agrega el nuevo alumno a la lista local de alumnos.
                    this.alumnos.push(response);
                    // Se reinicia el objeto nuevoAlumno para permitir la adición de otro alumno.
                    this.nuevoAlumno = {};
                },
                // Esta función maneja cualquier error que pueda ocurrir durante la solicitud HTTP.
                (error) => {
                    console.error('Error al agregar alumno:', error);
                }
            );
    } else {
        // Si no se completan todos los campos necesarios, se muestra un mensaje en la consola.
        console.log('Por favor, completa todos los campos.');
    }
  } 
}