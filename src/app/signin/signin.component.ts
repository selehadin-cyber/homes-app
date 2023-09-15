import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Roles } from '../roles';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  role: Roles = "Renter"

  constructor(
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    
  }
  selectRole(event:any) {
  this.role = event.target.value
  // Prints selected value
  console.log(this.role);
  }
  signUp(email: string, password: string, role: Roles) {
    this.authService.SignUp(email, password, role);
  }
}
