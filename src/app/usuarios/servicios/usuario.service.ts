import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getusuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');
  }
}
