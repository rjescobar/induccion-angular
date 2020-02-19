import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'docente/:id',
    component: DocenteComponent
  },
  {
    path: 'estudiante',
    component: EstudianteComponent
  },
  {
    path: '',
    component: InicioComponent
  },
  {
    path: '**',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
