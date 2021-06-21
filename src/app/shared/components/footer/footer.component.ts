import { StorageService } from './../../../services/storage.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from '../../../services/pedido.service';
import { PedidoDto } from '../../../models/pedido.dto';
import { MesaService } from 'src/app/services/mesa-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  pedido: PedidoDto;

  constructor(public router: Router, private pedidoService: PedidoService, public ngZone: NgZone, private mesaService: MesaService, private storage: StorageService) { }

  ngOnInit() {
    this.pedido = this.pedidoService.getPedido();
  }

  goToOrderDetails() {
    this.router.navigate(['order-details']);
  }

  rerendering(pedido: PedidoDto) {
    pedido = this.pedidoService.getPedido();
    if (pedido.itensDoPedido.length === 0) {
      return 0;
    } else {
      return pedido.itensDoPedido.length;
    }
  }

  chamarGarcom() {
    this.mesaService.callWaiter().subscribe(
      res => {
        alert('Garçom notificado');
      }
    )
  }
}
