import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  constructor(public activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    // Mantiene el valor del parametro.
    let id: string;
    // Obtiene el parametro o los parametros.
    this.activatedRouter.paramMap.pipe(
      map((param: ParamMap) => {
        id = param.get('id');
        // console.log(param.get('id'));
      })
    );

    console.log(id);
  }
}
