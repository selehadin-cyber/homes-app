import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userRole: string = 'Guest'; // Initialize with a default role
  
constructor(
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.getUserRole().subscribe((role: string) => {
      this.userRole = role; // Store the user's role
    });
  }
}
