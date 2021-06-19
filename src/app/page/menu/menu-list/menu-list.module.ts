import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuListPage } from './menu-list.page';

import { MenuListPageRoutingModule } from './menu-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuListPageRoutingModule,
    SharedModule
  ],
  declarations: [MenuListPage]
})
export class MenuListPageModule { }
