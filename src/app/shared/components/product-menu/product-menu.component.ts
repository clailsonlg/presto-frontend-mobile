import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/cardapio.service';
import { StorageService } from 'src/app/services/storage.service';
import { Cardapio } from '../../../models/cardapio';
import { PedidoService } from '../../../services/pedido.service';
import { Pedido } from '../../../models/pedido';

@Component({
  selector: 'product-menu',
  templateUrl: 'product-menu.component.html',
  styleUrls: ['product-menu.component.scss'],
})
export class ProductMenuComponent implements OnInit {

  produtos: Produto[];
  cardapio: Cardapio;
  nome: String;
  produtosCardapioGeral: Produto[];
  produtosCardapioComida: Produto[];
  produtosCardapioBebida: Produto[];
  produtosPedido: Produto[] = new Array;
  mostrarProdutos: number = 1;
  filtro = 1;
  pedido: Pedido;

  @Input() produto: Produto;

  constructor(private cardapioService: CardapioService, private storage: StorageService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedido = this.pedidoService.getPedido();

    this.cardapioService.produtosCardapio().subscribe(
      produtos => {
        console.log(produtos)
        this.produtos = produtos;
      }
    );
  }

  // ionViewDidLoad(){

  // }

  load() {
    sessionStorage.refresh = true;
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh)
      && location.reload();
    sessionStorage.refresh = false;
  }

  addProdutoPedido(produto: Produto) {

    this.pedidoService.addProduto(produto);
  }

  // exibirfiltroGeral() {
  //   this.filtro = 1;
  // }
  // exibirfiltroComida() {
  //   this.filtro = 2;
  // }
  // exibirfiltroBebida() {
  //   this.filtro = 3;
  // }

  exibirfiltroGeral() {
    this.cardapioService.produtosCardapio().subscribe(
      produtos => {
        this.produtos = produtos;
      }
    );
  }

  exibirfiltroComida() {
    this.cardapioService.produtoPorTipo("comida").subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    );
  }

  exibirfiltroBebida() {
    this.cardapioService.produtoPorTipo("bebida").subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    );
  }
}
