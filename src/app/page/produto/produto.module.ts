import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProdutoPage } from './produto.page';

import { ProdutoPageRoutingModule } from './produto-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule,
    SharedModule
  ],
  declarations: [ProdutoPage]
})
export class ProductPageModule {}
