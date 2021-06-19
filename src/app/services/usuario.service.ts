import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PREFIX } from '../api_config/prefix';
import { Usuario } from '../models/usuario';
import { UsuarioCadastro } from '../models/usuarioCadastro';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${PREFIX.baseUrl}/usuario/usuarios`)
  }

  addUsuario(usuario: UsuarioCadastro): Observable<any> {
    return this.http.post<Usuario>(`${PREFIX.baseUrl}/usuario/create`, usuario)
  }
}
