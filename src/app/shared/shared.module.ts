import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { OrderDetailsComponent } from '../page/menu/menu-list/order-details/order-details.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ProductMenuComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
