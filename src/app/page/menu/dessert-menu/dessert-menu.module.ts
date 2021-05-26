import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DessertMenuPage } from './dessert-menu.page';

import { DessertMenuPageRoutingModule } from './dessert-menu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DessertMenuPageRoutingModule,
    SharedModule
  ],
  declarations: [DessertMenuPage]
})
export class DessertMenuPageModule {}
