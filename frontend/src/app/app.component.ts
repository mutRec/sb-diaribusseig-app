import { Component, OnInit } from '@angular/core';
import { CrudService } from './services/crud.service';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Sóc Balena App';
  faSignOutAlt = faSignOutAlt;
  userEmail: string | null = null;

  constructor(
    private crudService: CrudService,
    private authService: AuthService,
    private router: Router
  ) {
    // S'actualitza l'email quan es navega
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.userEmail = this.authService.getUserEmail();
    });
  }
  
  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();
    
    this.crudService.getImmersions().subscribe( (res)=> {
    console.log(res);
   })
  
  }

  logout() {
    this.userEmail = null; // Neteja l'email del component immediatament
    this.authService.logout();
  }
  
}