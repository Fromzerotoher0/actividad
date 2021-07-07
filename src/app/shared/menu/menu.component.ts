import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/servicios/auth.service';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  constructor(private AService:AuthService) {}

get auth(){
  return this.AService.logeado;
}

  ngOnInit(): void {}
  routes: MenuItem[] = [
    {
      texto: 'Ver tabla',
      ruta: './tabla/listar',
    },
    {
      texto: 'agregar datos - tabla',
      ruta: './tabla/agregar',
    },
    {
      texto: 'listar usuarios',
      ruta: './usuarios/listar',
    },
  ];
}
