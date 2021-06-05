import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PREFIX } from "../api_config/prefix";
import { ProdutoDTO } from "../models/produto.dto";

@Injectable()
export class ProdutoService {

  constructor(public http: HttpClient) {
  }

  findById(produto_id : string) {
    return this.http.get<ProdutoDTO>(`${PREFIX.baseUrl}/produtos/${produto_id}`);
  }

  findByCategoria(categoria_id : string) {
    return this.http.get(`${PREFIX.baseUrl}/produtos/?categorias=${categoria_id}`);
  }

  // getSmallImageFromBucket(id : string) : Observable<any> {
  //   let url = `${PREFIX.baseUrl}/prod${id}-small.jpg`
  //   return this.http.get(url, {responseType : 'blob'});
  // }

  // getImageFromBucket(id : string) : Observable<any> {
  //   let url = `${PREFIX.baseUrl}/prod${id}.jpg`
  //   return this.http.get(url, {responseType : 'blob'});
  // }
}
