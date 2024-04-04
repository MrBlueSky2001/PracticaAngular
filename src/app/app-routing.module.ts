import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/profesores', pathMatch: 'full' },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: '**', redirectTo: '/profesores' } // Redirige a Profesores si la ruta no coincide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
