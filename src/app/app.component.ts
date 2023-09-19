import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './housing.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  //imports: [HomeComponent, RouterModule, HttpClientModule],
  providers: [HousingService, AuthService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'default';
}
