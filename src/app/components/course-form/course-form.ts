import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../app';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm {
  @Output() cursoAgregado = new EventEmitter<Curso>();
  nombre = '';
  docente = '';
  activo = true;

  agregarCurso() {
    if (this.nombre.trim() === '' || this.docente.trim() === '') {
      alert('Por favor, complete el nombre del curso y el docente.');
      return;
    }

    const nuevoCurso: Curso = {
      id: 0,
      nombre: this.nombre.trim(),
      docente: this.docente.trim(),
      activo: this.activo,
    };
    this.cursoAgregado.emit(nuevoCurso);
    this.nombre = '';
    this.docente = '';
    this.activo = true;
  }
}
