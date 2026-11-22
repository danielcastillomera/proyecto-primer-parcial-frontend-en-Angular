import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../../app';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  @Input() cursos: Curso[] = [];
  @Output() cursoEliminado = new EventEmitter<number>();
  @Output() estadoCambiado = new EventEmitter<Curso>();
  mostrarCursos = true;

  alternarLista() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  eliminarCurso(id: number) {
    this.cursoEliminado.emit(id);
  }

  cambiarEstado(curso: Curso) {
    this.estadoCambiado.emit(curso);
  }
}
