import { Component, OnInit } from '@angular/core';
import { TablaService } from '../servicios/tabla.service';
import { Tabla } from '../interfaces/tabla.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(private Tservice:TablaService,private router:Router) { }

  recursos:Tabla[]=[];
  ngOnInit(): void {
    this.Tservice.getdatos().subscribe(resp => this.recursos = resp);
  }

  eliminar(id:any){
    this.Tservice.borrar(id).subscribe(resp => location.reload())
  }
}
