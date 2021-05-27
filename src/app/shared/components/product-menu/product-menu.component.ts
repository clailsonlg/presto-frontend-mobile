import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'product-menu',
  templateUrl: 'product-menu.component.html',
  styleUrls: ['product-menu.component.scss'],
})
export class ProductMenuComponent implements OnInit{

  @Input() produto: Produto;

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
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

}
