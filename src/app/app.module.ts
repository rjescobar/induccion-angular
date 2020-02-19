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

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    DocenteComponent,
    InicioComponent
  ],
  imports: [BrowserModule, AppRoutingModule, UiModule, NgbModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
