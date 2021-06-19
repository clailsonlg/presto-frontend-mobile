import { QrCodeRoutingModule } from './qrcode-routing.module';
import { QrCodeComponent } from './qr-code.component';
import { NgModule } from "@angular/core";
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [QrCodeComponent],
    imports: [CommonModule, FormsModule, IonicModule,QrCodeRoutingModule, SharedModule],
  })
  export class QrCodeModule {}
