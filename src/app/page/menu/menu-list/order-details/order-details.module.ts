import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsRoutingModule } from './order-details.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderDetailsRoutingModule,
        SharedModule
    ],
    declarations: [OrderDetailsComponent]
})
export class OrderDetailsModule { }
