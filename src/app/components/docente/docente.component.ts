import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from '../shared/docente.service';
import { Docente } from '../shared/docente.model';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  constructor(public router: Router, private service: DocenteService) {}

  public lista: Docente[] = [];

  ngOnInit() {
    // Leemos la base de datos.
    this.service.obtenerDocentes().subscribe((result: Docente[]) => {
      this.lista = result;
    });
  }

  public editar(id: string) {
    // redireccionamos
    this.router.navigateByUrl('/docente/' + id);
  }
}
