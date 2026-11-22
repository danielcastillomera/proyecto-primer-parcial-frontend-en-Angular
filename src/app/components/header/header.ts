import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = 'ONIX: Sistema Gestión de Cursos';
  subtitulo =
    'Proyecto Primer Parcial - Autores: Daniel Fernando Castillo Mera & Josue Rafael Chichanda Velasquez';
}
