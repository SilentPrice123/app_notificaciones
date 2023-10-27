import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  constructor(private  router : Router) { }

  irAlLogin() {
    // Redirige a la página de login
    this.router.navigate(['/login']);
  }

  activarOpciones() {
    // Agrega aquí la lógica para activar otras opciones
  }
}
