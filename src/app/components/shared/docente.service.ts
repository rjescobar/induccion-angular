import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Docente } from './docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = 'https://heroes-api-904d4.firebaseio.com/docentes';

  constructor(public http: HttpClient) {}

  obtenerDocentes() {
    return this.http
      .get(`${this.apiUrl}.json`)
      .pipe(map(this.modificarResultados));
  }

  obtenerDocente(key: string) {
    return this.http.get(`${this.apiUrl}/${key}.json`).pipe(
      map((resultado: Docente) => {
        let newDocente: Docente;
        newDocente = resultado;
        newDocente.id = key;
        return newDocente;
      })
    );
  }

  private modificarResultados(docenteObj: object) {
    const docentes: Docente[] = [];
    if (docenteObj === null) {
      return [];
    }

    Object.keys(docenteObj).forEach(key => {
      console.log(key);
      const docente: Docente = docenteObj[key];
      docente.id = key;
      docentes.push(docente);
    });

    return docentes;
  }
}
