import { UsuarioDTO } from '../models/usuario.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PREFIX } from '../api_config/prefix';
import { Usuario } from '../models/usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${PREFIX.baseUrl}/usuario/usuarios`)
  }

  addUser(usuario: UsuarioDTO): Observable<any> {
    return this.http.post<Usuario>(`${PREFIX.baseUrl}/usuario/create/`, usuario).pipe(
      tap((newUsuario: Usuario) => console.log(`usuario adicionado email= ${newUsuario.email}`))
    )
  }
}
