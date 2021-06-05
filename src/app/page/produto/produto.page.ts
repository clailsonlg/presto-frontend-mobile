import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ProdutoDTO } from 'src/app/models/produto.dto';
import { ProdutoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produto',
  templateUrl: 'produto.page.html',
  styleUrls: ['produto.page.scss'],
})
export class ProdutoPage {

  items : ProdutoDTO[];

  constructor(public router: Router, private navParams: NavParams, private produtoService: ProdutoService) { }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('categoria_id');
    this.produtoService.findByCategoria(categoria_id)
      .subscribe(response => {
        this.items = response['content'];
        // this.loadImageUrls();
      },
      error => {});
  }

  // loadImageUrls() {
  //   for (var i=0; i<this.items.length; i++) {
  //     let item = this.items[i];
  //     this.productService.getSmallImageFromBucket(item.id)
  //       .subscribe(response => {
  //         item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.id}-small.jpg`;
  //       },
  //       error => {});
  //   }
  // }

  // showDetail() {
  //   this.navCtrl.push('ProdutoDetailPage');
  // showDetail(produto_id : string) {
  //   this.navCtrl.push('ProdutoDetailPage', {produto_id: produto_id});
  // }

}
