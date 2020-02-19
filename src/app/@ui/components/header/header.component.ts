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

  public lista: any[] = [];

  ngOnInit(): void {
    const menuCliente: Menu = new Menu();
    menuCliente.titulo = 'Cliente';
    menuCliente.descripcion = 'Menu Clientes';
    menuCliente.enlace = '/cliente';
    menuCliente.activo = true;

    const menuDocente: Menu = new Menu();
    menuDocente.titulo = 'Docente';
    menuDocente.descripcion = 'Menu Docentes';
    menuDocente.enlace = '/docentes';
    menuDocente.activo = false;

    this.lista.push(menuCliente);
    this.lista.push(menuDocente);
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
