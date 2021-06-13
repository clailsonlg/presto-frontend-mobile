import { QrCodeRoutingModule } from './qrcode-routing.module';
import { QrCodeComponent } from './qr-code.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [QrCodeComponent],
    imports: [QrCodeRoutingModule],
  })
  export class QrCodeModule {}