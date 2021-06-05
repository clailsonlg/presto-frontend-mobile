import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { PREFIX } from 'src/app/api_config/prefix';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { CartService } from 'src/app/services/cart.service';
import { ProdutoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: 'produto-detail.page.html',
  styleUrls: ['produto-detail.page.scss'],
})
export class ProdutoDetailPage {

  item: ProdutoDTO;

  constructor(public router: Router, private navParams: NavParams, public productService: ProdutoService, private cartService: CartService) { }

  ionViewDidLoad() {
    let produto_id = this.navParams.get('produto_id');
    this.productService.findById(produto_id)
      .subscribe(response => {
        this.item = response;
        // this.getImageUrlIfExists();
      },
      error => {});
  }

  // getImageUrlIfExists() {
  //   this.productService.getImageFromBucket(this.item.id)
  //     .subscribe(response => {
  //       this.item.imageUrl = `${PREFIX.baseUrl}/prod${this.item.id}.jpg`;
  //     },
  //     error => {});
  // }


  addToCart(produto: ProdutoDTO) {
    this.cartService.addProduto(produto);
    this.router.navigate(['/product-detail']);
  }
}
