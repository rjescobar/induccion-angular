import { Component, OnInit } from '@angular/core';
import { Docente } from '../shared/docente.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocenteService } from '../shared/docente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docente-editar',
  templateUrl: './docente-editar.component.html',
  styleUrls: ['./docente-editar.component.css']
})
export class DocenteEditarComponent implements OnInit {
  // Lista de departamentos.
  public departamentos: any[] = [
    { codigo: 1, nombre: 'Managua' },
    { codigo: 2, nombre: 'León' },
    { codigo: 3, nombre: 'Granada' },
    { codigo: 4, nombre: 'Masaya' },
    { codigo: 5, nombre: 'Matagalpa' }
  ];

  public docente: Docente = {
    id: '',
    codigo: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    departamento: null
  };

  // Formulario
  f: FormGroup = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required]),
    codigo: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required])
  });

  private id: string;

  constructor(private service: DocenteService, private router: ActivatedRoute) {
    this.f.setValue(this.docente);
    this.id = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.service.obtenerDocentes().subscribe((result: any) => {
      console.log(result);
    });

    this.service.obtenerDocente(this.id).subscribe((result: any) => {
      console.log('Docente', result);
      this.f.setValue(result);
    });
  }

  // Enviar el formulario
  public guardar(): void {
    console.log(this.f);
  }
}
