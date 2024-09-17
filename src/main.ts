// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

// Configuración de la aplicación
const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // Si necesitas servicios HTTP
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
