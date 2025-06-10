import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register({ email: this.email, password: this.password }).subscribe(res => {
      // Mostra un missatge d'èxit amb alertify
      // @ts-ignore
      alertify.success("Usuari registrat correctament!");
      this.router.navigate(['/login']);
    }, err => {
      // Maneja errors aquí
      // @ts-ignore
      alertify.error('Error al registrar: ' + (err.error?.message || 'Error inesperat'));
    });
  }
}
