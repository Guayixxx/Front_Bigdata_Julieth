import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements AfterViewInit {
  title = 'Front';

  ngAfterViewInit(): void {
    // Obtener los elementos del DOM
    const signupButton = document.getElementById('signup-button') as HTMLButtonElement;
    const loginButton = document.getElementById('login-button') as HTMLButtonElement;
    const userForms = document.getElementById('user_options-forms') as HTMLElement;

    // Verificar que los elementos existan antes de agregar eventos
    if (signupButton && loginButton && userForms) {
      // Agregar event listener al botón de "Sign Up"
      signupButton.addEventListener('click', () => {
        userForms.classList.remove('bounceRight');
        userForms.classList.add('bounceLeft');
      }, false);

      // Agregar event listener al botón de "Login"
      loginButton.addEventListener('click', () => {
        userForms.classList.remove('bounceLeft');
        userForms.classList.add('bounceRight');
      }, false);
    }
  }
}