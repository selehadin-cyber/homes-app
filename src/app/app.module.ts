import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  //declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFirestoreModule, // Import Firestore and Auth modules
    AngularFireAuthModule,
    AppComponent
  ],
  providers: [
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
  //bootstrap: [AppComponent],
})
export class AppModule {}
