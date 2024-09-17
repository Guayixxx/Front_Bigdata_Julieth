import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  imports: [
    RouterModule,
    ReactiveFormsModule,  // Importa ReactiveFormsModule directamente
    HttpClientModule      // Importa HttpClientModule directamente
  ]
})
export class LoginComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // Inicializa el formulario con validaciones
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  goToUsers() {
    this.router.navigate(['/users']);  // Navegar a la ruta del componente de usuarios
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Obtener los valores del formulario
      const formData = this.signupForm.value;

      // Asegurarnos de que la fecha esté en formato yyyy-mm-dd
      const birthDate = new Date(formData.dob);
      const formattedDate = birthDate.toISOString().split('T')[0];  // Extraemos la parte de yyyy-mm-dd

      // Formateamos los datos según lo que espera el backend
      const requestData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        birth_date: formattedDate,
        password: formData.password
      };

      // Mostrar el objeto JSON en consola
      console.log('Datos que se enviarán al backend:', requestData);

      // Hacer la petición POST al backend
      this.http.post('http://98.82.38.210:5000/register', requestData).subscribe(
        response => {
          console.log('Registro exitoso', response);
        },
        error => {
          console.error('Error al registrar', error);
        }
      );
    } else {
      console.log('El formulario no es válido');
    }
  }
}
