import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { CourseForm } from './components/course-form/course-form';
import { CourseList } from './components/course-list/course-list';
import { Footer } from './components/footer/footer';

export interface Curso {
  id: number;
  nombre: string;
  docente: string;
  activo: boolean;
}

@Component({
  standalone: true,
  imports: [Header, CourseForm, CourseList, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  cursos: Curso[] = [
    { id: 1, nombre: 'Desarrollo de Aplicaciones Web Avanzado', docente: 'Andrea Carolina Ruiz', activo: true },
    { id: 2, nombre: 'Bases de Datos Avanzado', docente: 'Miguel Ángel Herrera', activo: true },
    { id: 3, nombre: 'Seguridad Informática', docente: 'Camila Fernanda Soto', activo: false },
    { id: 4, nombre: 'Redes Informáticas', docente: 'Javier Alejandro Torres', activo: false },
    { id: 5, nombre: 'Inteligencia Artificial', docente: 'Valentina Isabel Mora', activo: true },
    { id: 6, nombre: 'Inteligencia de Negocios', docente: 'Sebastián Andrés López', activo: false },
    { id: 7, nombre: 'Contabilidad', docente: 'Natalia Alejandra Gómez', activo: true },
    { id: 8, nombre: 'Finanzas', docente: 'Ricardo Mateo Vargas', activo: false },
    { id: 9, nombre: 'Emprendimiento', docente: 'Mariana Sofía Castillo', activo: true },
    { id: 10, nombre: 'Big Data', docente: 'Diego Fernando Pérez', activo: true },
  ];

  agregarCurso(nuevoCurso: Curso) {
    const siguienteId =
      this.cursos.length === 0
        ? 1
        : Math.max(...this.cursos.map((curso) => curso.id)) + 1;

    nuevoCurso.id = siguienteId;
    this.cursos = [...this.cursos, nuevoCurso];
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter((curso) => curso.id !== id);
  }

  cambiarEstado(curso: Curso) {
    curso.activo = !curso.activo;
  }
}