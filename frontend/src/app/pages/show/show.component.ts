import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faPen, faTrash, faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Immersio } from 'src/app/models/immersio.model';
import { CrudService } from 'src/app/services/crud.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  faCirclePlus = faCirclePlus
  faPen = faPen
  faTrash = faTrash
  faArrowLeft = faArrowLeft
  faArrowUp = faArrowUp
  immersions: Immersio[] = []
  constructor( 
    private crudService:CrudService,
    private alertifyService:AlertifyService
    ) {
  }
  
  ngOnInit():void {
    this.crudService.getImmersions().subscribe( (res: Immersio[])=>{
     this.immersions = res
    })
  }

  delete(id:any, index:any){
    this.alertifyService.confirm({
      message: "¿Estàs segur d'eliminar l'Immersió?",
      callback_delete: () => {

        this.crudService.deleteImmersio(id).subscribe( (res)=>{
          this.immersions.splice(index, 1)
        });
      },
    });
  }


}

