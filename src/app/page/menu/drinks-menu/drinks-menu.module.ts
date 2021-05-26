import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DrinksMenuPage } from './drinks-menu.page';

import { DrinksMenuPageRoutingModule } from './drinks-menu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinksMenuPageRoutingModule,
    SharedModule
  ],
  declarations: [DrinksMenuPage]
})
export class DrinksMenuPageModule {}
