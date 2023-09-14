
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component'; // Import HomeComponent here
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment';
import { getAuth } from 'firebase/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    {
      provide: getFirestore,
      useFactory: () => {
        const app = initializeApp(environment.firebase);
        return getFirestore(app);
      },
    },
    {
      provide: getAuth,
      useFactory: () => {
        const app = initializeApp(environment.firebase);
        return getAuth(app);
      },
    },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
}).catch(err => console.error(err));
