import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PREFIX } from '../api_config/prefix';
import { MesaDTO } from '../models/mesa.dto';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient, private user: AuthService) { }

  logarNaMesa(id: string): Observable<any> {
    return this.http.put<any>(`${PREFIX.baseUrl}/mesa/addcliente/${+id}/${this.user.loggedUser().email}/${this.user.loggedUser().idRestaurante}`, {});
  }

  getMesaByUser(): Observable<MesaDTO> {
    return this.http.get<MesaDTO>(`${PREFIX.baseUrl}/mesa/mesabycliente/${this.user.loggedUser().email}`);
  }
}