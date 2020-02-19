import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/menu.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public titulo = 'MINED-X!';

  public lista: Menu[] = [];

  ngOnInit(): void {
    this.lista = [
      {
        titulo: 'Estudiante',
        descripcion: 'Menu estudiante',
        enlace: '/estudiante',
        activo: true
      },
      {
        titulo: 'Docente',
        descripcion: 'Menu Docentes',
        enlace: '/docente',
        activo: true
      }
    ];
  }

  public eventoInput(event: any) {
    this.titulo = event.target.value;
    console.log(event.target.value);
  }

  public eventoClick(event: any) {
    this.titulo = 'rafael';
    console.log(this.titulo);
  }
}
