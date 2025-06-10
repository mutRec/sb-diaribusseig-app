import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Immersio } from 'src/app/models/immersio.model';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  id!: any
  model: Immersio

  constructor(
    private crudService:CrudService,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private alertifyService:AlertifyService
  ) {

  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.crudService.getImmersio(this.id).subscribe( (res)=>{
      this.model = {
        _id: res._id,
        numimmersio: res.numimmersio,
        dataimmersio: res.dataimmersio,
        lloc: res.lloc,
        centre: res.centre,
        visibilitat: res.visibilitat,
        tempaire: res.tempaire,
        tempaigua: res.tempaigua,
        profmax: res.profmax,
        atmini: res.atmini,
        atmfinal: res.atmfinal,
        ampolla: res.ampolla,
        llast: res.llast,
        horaentrada: res.horaentrada,
        horasortida: res.horasortida,
        tempsfons: res.tempsfons,
        paradaseguretat: res.paradaseguretat,
        comentaris: res.comentaris
      }
    })
  }
  onSubmit(immersio: Immersio) {
    this.crudService.updateImmersio(this.id, immersio).subscribe({
      next: ()=>{
        this.alertifyService.success("Registre d'Immersió actualitzat!")
        this.router.navigateByUrl('/')
      },
      error:(error) =>{
        this.alertifyService.error(error)
      },
     });
  }
}