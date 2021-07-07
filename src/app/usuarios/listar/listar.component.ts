import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor(private Uservice:UsuarioService) { }

  usuarios:Usuario[] = [];

  ngOnInit(): void {
    this.Uservice.getusuarios().subscribe(usuarios => this.usuarios = usuarios)
  }

}
