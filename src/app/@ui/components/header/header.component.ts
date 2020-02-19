import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
        enlace: '/docente',
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
