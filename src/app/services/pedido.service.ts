import { Injectable } from "@angular/core";
import { Pedido } from "../models/pedido";
import { Produto } from "../models/produto";
import { StorageService } from "./storage.service";
import { HttpClient } from '@angular/common/http';
import { PREFIX } from "../api_config/prefix";
import { Observable } from 'rxjs';
import { PedidoDto } from '../models/pedido.dto';

const pedido: Pedido = {
  descricao: "",
  horaQueFoiFeito: 0,
  id: null,
  itensDoPedido: [],
  maiorTempo: 0,
  nome: "",
  nomeCliente: "",
  tempoIdeal: 0,
  valorTotal: 0,
};

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  private url = `${PREFIX.baseUrl}/pedido`

  constructor(private storage: StorageService, private http: HttpClient) {

  }

  createOrClearPedido(): Pedido {
    this.storage.setPedido(pedido);
    return pedido
  }

  getPedido(): Pedido {
    let pedido: Pedido = this.storage.getPedido();
    if (pedido == null) {
      pedido = this.createOrClearPedido();
    }
    return pedido;
  }

  addProduto(produto: Produto): Pedido {
    let pedido = this.getPedido();
    pedido.itensDoPedido.push(produto);
    this.storage.setPedido(pedido);
    return pedido;
  }

  removerProduto(produto: Produto) {
    let pedido = this.getPedido();
    var i = 0;
    while (i < pedido.itensDoPedido.length) {
      if (pedido.itensDoPedido[i].id === produto.id) {
        pedido.itensDoPedido.splice(i, 1);
        i = pedido.itensDoPedido.length;
      } else {
        i++;
      }
    }
    this.storage.setPedido(pedido);
  }

  realizarPedido(): Observable<any> {
    if (this.getPedido().itensDoPedido.length > 0) {
      return this.http.post<any>(
        `${this.url}/create/${this.storage.getLocalUser().email}`,
        this.getPedido().itensDoPedido
      );
    } else {
      alert('Não tem pedido!')
    }
  };
};
