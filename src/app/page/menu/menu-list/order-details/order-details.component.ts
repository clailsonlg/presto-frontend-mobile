import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../services/pedido.service';
import { Pedido } from '../../../../models/pedido';
import { Produto } from '../../../../models/produto';
import { Router } from '@angular/router';
import { MesaService } from '../../../../services/mesa-service';
import { Mesa } from '../../../../models/mesa';
import { MesaDTO } from '../../../../models/mesa.dto';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  pedido: Pedido;
  produtos: Produto[];
  hasOrder: boolean = false;
  mesa: MesaDTO;

  constructor(private pedidoService: PedidoService, public router: Router, private mesaService: MesaService) { }
  ngOnInit() {
    this.pedido = this.pedidoService.getPedido();
    this.produtos = this.pedido.itensDoPedido;
    this.mesaService.getMesaByUser().subscribe(
      res => {
        console.log(res);
        this.mesa = res;
      }
    );

    setTimeout(() => {
      if (this.mesa.pedido === null) {
        this.hasOrder = false;
      } else {
        this.hasOrder = true;
      }
    }, 2000)


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
    this.produtos = this.pedido.itensDoPedido;
  }

  returnMenuList() {
    this.router.navigate(['/menu-list']);
  }

  realizarPedido() {
    this.pedidoService.realizarPedido().subscribe(
      (res) => {
        this.hasOrder = true;
        this.pedidoService.createOrClearPedido();
      },
      (error) => {
        this.hasOrder = false;
      }
    );
  }

  cancelarPedido() {
    this.mesaService.removePedido().subscribe(
      res => {
        this.pedidoService.createOrClearPedido();
        this.router.navigate(['/menu-list']);
      }
    );

  }
}
