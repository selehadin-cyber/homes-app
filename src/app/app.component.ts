import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, HttpClientModule],
  providers: [HousingService],
  template: `<main>
    <header>
      <img src="/assets/logo.svg" alt="logo" class="brand-logo">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
