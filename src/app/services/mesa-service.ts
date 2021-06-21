import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PREFIX } from '../api_config/prefix';
import { MesaDTO } from '../models/mesa.dto';
import { PedidoService } from './pedido.service';
import { SatisfacaoDTO } from '../models/satisfacao.dto';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient, private user: AuthService, private pedidoService: PedidoService) { }

  logarNaMesa(id: string): Observable<any> {
    return this.http.put<any>(`${PREFIX.baseUrl}/mesa/addcliente/${+id}/${this.user.loggedUser().email}/${this.user.loggedUser().idRestaurante}`, {});
  }

  getMesaByUser(): Observable<MesaDTO> {
    return this.http.get<MesaDTO>(`${PREFIX.baseUrl}/mesa/mesabycliente/${this.user.loggedUser().email}`);
  }

  finishPedido(satisfacao: SatisfacaoDTO, pedidoId: number): Observable<String> {
    return this.http.put<String>(
      `${PREFIX.baseUrl}/mesa/encerrarPedido/${this.user.loggedUser().email}/${pedidoId}`, satisfacao
    )
      .pipe(
        tap(
          console.log
        )
      );
  }
}