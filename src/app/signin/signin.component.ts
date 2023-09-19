import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { Roles } from '../roles';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  animations: [
  trigger('myInsertRemoveTrigger', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      animate('300ms', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      animate('300ms', style({ opacity: 0, transform: 'translateX(-100%)' })),
    ]),
  ]),
],
  imports: [MatFormFieldModule, MatInputModule,MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule,MatSelectModule , NgIf, RouterModule],
})
export class SigninComponent implements OnInit {
  role: Roles = "Renter"
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  toggle: boolean = true

  toggleFunction() {
    this.toggle = !this.toggle
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

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
