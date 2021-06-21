import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SatisfacaoDTO } from '../../../models/satisfacao.dto';
import { MesaDTO } from '../../../models/mesa.dto';
import { MesaService } from '../../../services/mesa-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-satisfaction-modal',
  templateUrl: './satisfaction-modal.component.html',
  styleUrls: ['./satisfaction-modal.component.scss'],
})
export class SatisfactionModalComponent implements OnInit {

  constructor(public modalController: ModalController, private mesaService: MesaService, public router: Router) { }

  mesa: MesaDTO;
  satisfacao: SatisfacaoDTO = {
    avaliacao: '',
    feedback: ''
  };

  ngOnInit() {
    this.mesaService.getMesaByUser().subscribe(
      res => {
        this.mesa = res;
      }
    )
  }

  finishOrder() {
    this.mesaService.finishPedido(this.satisfacao, this.mesa.pedido.id).subscribe(
      res => {
        this.router.navigate(['/home']);
      }
    ),
      err => alert(err);
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
