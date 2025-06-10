import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Immersio } from 'src/app/models/immersio.model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

 constructor(
   private router:Router,
   private crudService:CrudService,
     private alertifyService: AlertifyService
   ) {

   }

   onSubmit(immersio:Immersio){
    this.crudService.createImmersio(immersio).subscribe({
      next:()=>{
        this.alertifyService.success("Registre d'Immersió creat correctament!")
        this.router.navigateByUrl("/")
      },
      error: (error)=>{
        this.alertifyService.error(error)
      }
    })
   }
}