import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductMenuComponent } from './components/product-menu/product-menu.component';
import { OrderDetailsComponent } from '../page/menu/menu-list/order-details/order-details.component';
import { SatisfactionModalComponent } from './components/satisfaction-modal/satisfaction-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ProductMenuComponent, SatisfactionModalComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    HeaderComponent, FooterComponent, ProductMenuComponent, SatisfactionModalComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
