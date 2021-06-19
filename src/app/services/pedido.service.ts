import { Injectable } from "@angular/core";
import { Pedido } from "../models/pedido";
import { Produto } from "../models/produto";
import { StorageService } from "./storage.service";

const pedido: Pedido = {
  descricao: "",
  horaQueFoiFeito: 0,
  id:null,
  itensDoPedido:[],
  maiorTempo:0,
  nome:	"",
  nomeCliente:	"",
  tempoIdeal:0,
  valorTotal:	0,
};

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  constructor(private storage: StorageService) {

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
}
