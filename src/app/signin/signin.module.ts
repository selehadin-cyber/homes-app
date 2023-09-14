import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule
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
  ]
})
export class SigninModule { }
