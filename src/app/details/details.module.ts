// details.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getAuth } from 'firebase/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
    imports: [
    CommonModule,
    DetailsRoutingModule,
    DetailsComponent,

  ],
  declarations: [],
})
export class DetailsModule {}
