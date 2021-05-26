import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PizzaMenuPage } from './pizza-menu.page';

import { PizzaMenuPageRoutingModule } from './pizza-menu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaMenuPageRoutingModule,
    SharedModule
  ],
  declarations: [PizzaMenuPage]
})
export class PizzaMenuPageModule {}
