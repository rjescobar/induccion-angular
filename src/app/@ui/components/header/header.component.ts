import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/menu.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  public titulo = 'MINED-X!';

  lista: Menu[] = [];

  ngOnInit(): void {
    // Inicializamos la lista
    this.lista = [
      {
        titulo: 'Docente',
        descripcion: 'Menu Docentes',
        enlace: '/docentes',
        activo: true
      },
      {
        titulo: 'Estudiante',
        descripcion: 'Menu Estudiante',
        enlace: '/estudiante',
        activo: true
      }
    ];
  }

  public eventoInput(event: any) {
    this.titulo = event.target.value;
    console.log(event.target.value);
  }

  public eventoClick() {
    this.titulo = 'rafael';
    console.log(this.titulo);
  }
}
