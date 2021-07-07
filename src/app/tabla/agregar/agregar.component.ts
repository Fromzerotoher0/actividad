import { Component, OnInit } from '@angular/core';
import { TablaService } from '../servicios/tabla.service';
import { Tabla } from '../interfaces/tabla.interface';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private Tservice:TablaService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  if (!this.router.url.includes('editar')) {
    return;
  } else {
    this.activatedroute.params
      .pipe(switchMap(({ id }) => this.Tservice.getrecursoid(id)))
      .subscribe((recurso) => (this.recurso = recurso));
  }
  }

recurso:Tabla={
  nombre:''
}

  guardar(){
     if (this.recurso.id) {
       //actualizar
       this.Tservice
         .editar(this.recurso)
         .subscribe((resp) => this.router.navigate(['/tabla/listado']));
     } else {
       this.Tservice
         .agregar(this.recurso)
         .subscribe((resp) =>
           this.router.navigate(['/tabla/listado']));
     }
    //this.Tservice.agregar(this.recurso).subscribe(resp => console.log('respuesta',resp))
    //console.log('guardado')
  }
}
