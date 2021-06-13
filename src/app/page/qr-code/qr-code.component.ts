import { Router } from '@angular/router';
import { MesaService } from './../../services/mesa-service';
import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit {
  barcodeScanner: BarcodeScanner = new BarcodeScanner();
  constructor(private mesaService: MesaService, private route: Router) { }

  ngOnInit() { }

  abrirQr(): void {
    this.barcodeScanner.scan().then(barcodeData => {
      this.mesaService.logarNaMesa(barcodeData.text).subscribe(
        res => {
          this.route.navigateByUrl("/menu-list");
        },
        error => {
          console.log(error)
        }
      );
    }).catch(err => {
      // error
    });
  }

}
