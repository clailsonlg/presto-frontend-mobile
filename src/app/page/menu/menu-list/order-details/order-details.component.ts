import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../services/pedido.service';
import { Pedido } from '../../../../models/pedido';
import { Produto } from '../../../../models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  pedido: Pedido;
  produtos: Produto[];

  constructor(private pedidoService: PedidoService, public router: Router) { }
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

  ionViewDidEnter() {
    this.pedido = this.pedidoService.getPedido();
    this.produtos = this.pedido.itensDoPedido;
  }

  removeProdutoPedido(produto: Produto) {
    this.pedidoService.removerProduto(produto);
    this.pedido = this.pedidoService.getPedido();
  }

  returnMenuList() {
    this.router.navigate(['/menu-list']);
  }
}
