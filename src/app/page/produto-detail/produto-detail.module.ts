import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProdutoDetailPage } from './produto-detail.page';

import { ProdutoDetailPageRoutingModule } from './produto-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ProdutoDetailPage]
})
export class ProdutoDetailPageModule {}
