import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { AngularFireModule } from '@angular/fire/compat'; // Import AngularFireModule
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Import AngularFirestoreModule
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Import AngularFireAuthModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import routeConfig from './routes';
import { environment } from 'src/environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent
    // Add your other components here
  ],
  imports: [
    HomeComponent,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    AngularFireModule.initializeApp(environment.firebase), // Initialize Firebase here
    AngularFirestoreModule, // Import Firestore module here
    AngularFireAuthModule // Import Firebase Auth module here
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap your main component here
})
export class AppModule { }

// Define a bootstrap method to initialize the application
export function bootstrap() {
  const platform = platformBrowserDynamic();
  platform.bootstrapModule(AppModule);
}

// Call the bootstrap method to start your application
bootstrap();
