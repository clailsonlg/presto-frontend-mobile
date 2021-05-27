import { PREFIX } from '../api_config/prefix';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { AuthService } from './auth.service';
import { Cardapio } from '../models/cardapio';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  produtos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${PREFIX.baseUrl}/produto/produtos`);
  }

  criarCardapio(cardapio: Cardapio, id: number) {
    return this.http.post<Cardapio>(`${PREFIX.baseUrl}/cardapio/create/${id}`, cardapio);
  }

  cardapio(): Observable<any> {
    return this.http.get<Cardapio>(`${PREFIX.baseUrl}/cardapio/getbyid/${this.authService.loggedUser().idRestaurante}`);
  }
  produtosCardapio(): Observable<any> {
    return this.http.get<Cardapio>(`${PREFIX.baseUrl}/cardapio/getprodutoscardapio/${this.authService.loggedUser().idRestaurante}`);
  }

  produtosPorNomeCardapio(nome: String): Observable<any> {
    return this.http.get<Produto[]>(`${PREFIX.baseUrl}/cardapio/produtoscardapiobyname/${this.authService.loggedUser().idRestaurante}/${nome}`);
  }

  produtoPorTipo(tipo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${PREFIX.baseUrl}/cardapio/getfiltro/${this.authService.loggedUser().idRestaurante}/${tipo}`);
  }

  addProdutoNoCardapio(nome: String, produto: Produto) {
    return this.http.put(`${PREFIX.baseUrl}/cardapio/addproduto/${nome}`, produto);
  }

  removeProduto(produto: Produto): Observable<any> {
    return this.http.put<any>(`${PREFIX.baseUrl}/cardapio/remove/${this.authService.loggedUser().idRestaurante}`, produto);
  }
}
