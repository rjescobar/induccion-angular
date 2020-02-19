import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './@ui/ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [AppComponent, DocenteComponent, EstudianteComponent, InicioComponent],
  imports: [BrowserModule, AppRoutingModule, UiModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
