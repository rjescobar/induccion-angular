import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './@ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { DocenteComponent } from './components/docente/docente.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { DocenteEditarComponent } from './components/docente-editar/docente-editar.component';
import { from } from 'rxjs';
// Agrega las funcionalidades para Forms en angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    DocenteComponent,
    InicioComponent,
    DocenteEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
