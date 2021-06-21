import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../services/pedido.service';
import { Pedido } from '../../../../models/pedido';
import { Produto } from '../../../../models/produto';
import { Router } from '@angular/router';
import { MesaService } from '../../../../services/mesa-service';
import { MesaDTO } from '../../../../models/mesa.dto';
import { SatisfacaoDTO } from '../../../../models/satisfacao.dto';
import { ModalController } from '@ionic/angular';
import { SatisfactionModalComponent } from './satisfaction-modal/satisfaction-modal.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  pedido: Pedido;
  produtos: Produto[];
  hasOrder: boolean = false;
  shouldRenderProducts: boolean = false;
  mesa: MesaDTO;
  satisfacao: SatisfacaoDTO

  constructor(private pedidoService: PedidoService, public router: Router, private mesaService: MesaService, public modalController: ModalController) { }
  ngOnInit() {
    this.pedido = this.pedidoService.getPedido();
    this.produtos = this.pedido.itensDoPedido;
    this.getMesa();

    setTimeout(() => {
      if (this.mesa.pedido === null) {
        this.hasOrder = false;
      } else {
        this.hasOrder = true;
      }
    }, 2000)

    setTimeout(() => {
      if (this.pedido === undefined) {
        if (this.mesa.pedido === null) {
          this.shouldRenderProducts = true;
        }
      } else if (this.pedido.itensDoPedido.length === 0) {
        if (this.mesa.pedido === null) {
          this.shouldRenderProducts = true;
        }
      }
    }, 2000)
  }

  getMesa() {
    this.mesaService.getMesaByUser().subscribe(
      res => {
        this.mesa = res;
      }
    );
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
      (res: Pedido) => {
        this.pedidoService.createOrClearPedido();
        this.getMesa();
        this.hasOrder = true;
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

  finishOrder() {
    this.satisfacao = {
      avaliacao: 'avaliação teste',
      feedback: 'feedback teste'
    }
    this.mesaService.finishPedido(this.satisfacao, this.mesa.pedido.id).subscribe(
      (res: SatisfacaoDTO) => {
      }
    ),
      (err: any) => console.log(err);
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: SatisfactionModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
