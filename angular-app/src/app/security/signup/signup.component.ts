import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user: User = new User();

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe(
      (response) => {
        console.log(this.user);
        alert('Registration successful! You can now log in.');
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle error, for example, show an error message
        this.errorMessage = 'There was an error during signup. Please try again.';
      }
    );
  }
}

