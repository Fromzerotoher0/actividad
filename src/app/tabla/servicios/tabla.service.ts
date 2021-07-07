import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tabla } from '../interfaces/tabla.interface';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  constructor(private http: HttpClient) {}
  getdatos(): Observable<Tabla[]> {
    return this.http.get<Tabla[]>('http://localhost:3000/tabla');
  }

  agregar(tabla: Tabla): Observable<Tabla> {
    return this.http.post<Tabla>('http://localhost:3000/tabla', tabla);
  }
  borrar(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/tabla/${id}`);
  }
  editar(recurso: Tabla): Observable<Tabla> {
    return this.http.put<Tabla>(
      `http://localhost:3000/tabla/${recurso.id}`,
      recurso
    );
  }
  getrecursoid(id: string): Observable<Tabla> {
    return this.http.get<Tabla>(`http://localhost:3000/tabla/${id}`);
  }
}
