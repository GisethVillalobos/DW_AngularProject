import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginDTO } from '../../dto/login-dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginDTO: LoginDTO = new LoginDTO();

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.loginDTO).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/main']);
        alert('Login successful!');
      },
      (error) => {
        this.errorMessage = 'Invalid credentials, please try again.';
      }
    );
  }
}

