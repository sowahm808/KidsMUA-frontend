import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { apiErrorInterceptor } from './app/core/interceptors/api-error.interceptor';
import { validateEnvironment } from './app/core/configuration/environment.validation';

validateEnvironment(environment);
if (environment.enableMockApi) { void import('../mocks/browser').then(({ worker }) => worker.start({ onUnhandledRequest: 'bypass' })); }
bootstrapApplication(AppComponent,{providers:[provideAnimations(),provideRouter(routes,withComponentInputBinding()),provideHttpClient(withInterceptors([authInterceptor,apiErrorInterceptor])),provideServiceWorker('ngsw-worker.js',{enabled:environment.production&&environment.enablePwa,registrationStrategy:'registerWhenStable:30000'})]}).catch((error:unknown)=>console.error('Application bootstrap failed',error));
