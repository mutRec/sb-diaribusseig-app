import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login({ email: this.email, password: this.password }).subscribe(res => {
      if (res.token) {
        this.auth.setToken(res.token);
        this.auth.setUserEmail(this.email); // Desa l'email
        this.router.navigate(['/main']); // Redirigeix a la pàgina principal
      }
    }, err => {
      // @ts-ignore
      alertify.error('Usuari o contrasenya incorrectes');
    });
  }


}