import { Component, OnInit } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Sóc Balena App';

  constructor(private crudService:CrudService) {
  }
  
  ngOnInit(): void {
    
    this.crudService.getImmersions().subscribe( (res)=> {
    console.log(res);
   })
  
  }
  
}