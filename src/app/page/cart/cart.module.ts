import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CartPage } from './cart.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    SharedModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
