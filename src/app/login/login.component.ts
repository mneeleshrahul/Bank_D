// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  submitForm(): void {
    
    this.authService.login(this.username, this.password)
      .subscribe(
        (response: any) => {
          if (response.length > 0) {
            // Successful login, navigate to the details page
            this.router.navigate(['/details']);
          } else {
            // Invalid credentials
            this.errorMessage = 'Invalid username or password';
          }
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'An error occurred while processing your request';
        }
      );
  }
}
