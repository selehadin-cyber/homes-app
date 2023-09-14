import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './housing.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, HttpClientModule],
  providers: [HousingService, AuthService],
  template: `<main>
    <header>
      <img src="/assets/logo.svg" alt="logo" class="brand-logo">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'default';
}
