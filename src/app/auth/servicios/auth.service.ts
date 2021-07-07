import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http:HttpClient) {}
  private activo: User | undefined;

  get logeado(){
    return {...this.activo}
  }

  login() {
    return this.http.get<User>(`http://localhost:3000/usuarios/2`)
    .pipe(tap(resp => this.activo = resp),
          tap(resp =>localStorage.setItem('id',resp.id!)));
  }

  logout()
  {
    localStorage.clear();
  }
}
