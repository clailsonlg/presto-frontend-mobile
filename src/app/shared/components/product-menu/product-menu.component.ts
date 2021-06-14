import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/cardapio.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'product-menu',
  templateUrl: 'product-menu.component.html',
  styleUrls: ['product-menu.component.scss'],
})
export class ProductMenuComponent implements OnInit{

  produtosCardapioGeral: Produto[];
  produtosCardapioComida: Produto[];
  produtosCardapioBebida: Produto[];
  produtosPedido: Produto[] = new Array;
  mostrarProdutos: number = 1;
  filtro = 1;

  @Input() produto: Produto;

  constructor(private cardapioService: CardapioService, private storage: StorageService) { }

  ngOnInit(): void {
  }

  ionViewDidLoad(){
    let pedido = this.storage.getPedido();
    this.produtosCardapioGeral = pedido.itensDoPedido;
    this.produtosCardapioComida = pedido.itensDoPedido;
    this.produtosCardapioBebida = pedido.itensDoPedido;
  }

  load() {
    sessionStorage.refresh = true;
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh)
      && location.reload();
    sessionStorage.refresh = false;
  }

  removerProdutoDoCardapio(produto: Produto) {
    this.cardapioService.removeProduto(produto).subscribe(
      removeProduto => {
        this.load();
      }
    );
  }

  addProdutoPedido(produto: Produto) {
    this.produtosPedido.push(produto);
  }

  exibirfiltroGeral() {
    this.filtro = 1;
  }
  exibirfiltroComida() {
    this.filtro = 2;
  }
  exibirfiltroBebida() {
    this.filtro = 3;
  }

}
