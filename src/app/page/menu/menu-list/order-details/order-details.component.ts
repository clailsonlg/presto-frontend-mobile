import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../services/pedido.service';
import { Pedido } from '../../../../models/pedido';
import { Produto } from '../../../../models/produto';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  pedido: Pedido;
  produtos: Produto[];

  constructor(private pedidoService: PedidoService) { }
  ngOnInit() {
    this.pedido = this.pedidoService.getPedido();
    this.produtos = this.pedido.itensDoPedido;

    setTimeout(() => {
      if (
        this.pedido.itensDoPedido !== null && this.pedido.itensDoPedido !== undefined && this.pedido.itensDoPedido.length !== 0) {
      } else {
        alert('Não tem pedidos')
      }
    }, 2000)
  }

  removeProdutoPedido(produto: Produto) {
    this.pedidoService.removerProduto(produto);
    this.pedido = this.pedidoService.getPedido();
  }
}
