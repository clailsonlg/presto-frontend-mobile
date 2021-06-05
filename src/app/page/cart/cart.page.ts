import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PREFIX } from 'src/app/api_config/prefix';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ProdutoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
})
export class CartPage {

  items: CartItem[];

  constructor(public router: Router, private cartService: CartService, private produtoService: ProdutoService) { }

  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.items = cart.items;
    this.loadImageUrls();
  }

  loadImageUrls() {
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      // this.productService.getSmallImageFromBucket(item.produto.id)
      //   .subscribe(response => {
      //     item.produto.imageUrl = `${PREFIX.baseUrl}/prod${item.produto.id}-small.jpg`;
      //   },
      //   error => {});
    }
  }

}
