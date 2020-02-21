import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Docente } from './docente.model';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = 'https://heroes-api-904d4.firebaseio.com/docentes.json';

  constructor(public http: HttpClient) {}

  obtenerDocentes() {
    return this.http.get(this.apiUrl).pipe(map(this.modificarResultado));
  }

  obtenerDocente(key: string) {
    return this.http.get(
      `https://heroes-api-904d4.firebaseio.com/docentes/${key}.json`
    );
  }

  private modificarResultado(docenteObj: object) {
    const docentes: Docente[] = [];
    if (docenteObj === null) {
      return [];
    }

    Object.keys(docenteObj).forEach(key => {
      console.log(key);
      const docente: Docente = docenteObj[key];
      // docente.id = key;
      docentes.push(docente);
    });

    return docentes;
  }
}
