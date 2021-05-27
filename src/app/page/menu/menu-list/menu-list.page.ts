import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/models/cardapio';
import { Produto } from 'src/app/models/produto';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.page.html',
  styleUrls: ['menu-list.page.scss'],
})
export class MenuListPage implements OnInit {
  produtos: Produto[];
  cardapio: Cardapio;
  nome: String;

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.produtosCardapio().subscribe(
      produtos => {
        this.produtos = produtos;
      }
    );
  }

  exibirfiltroGeral(){
    this.cardapioService.produtosCardapio().subscribe(
      produtos => {
        this.produtos = produtos;
      }
    );
  }

  exibirfiltroComida(){
    this.cardapioService.produtoPorTipo("comida").subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    );
  }

  exibirfiltroBebida(){
    this.cardapioService.produtoPorTipo("bebida").subscribe(
      produtosLista => {
        this.produtos = produtosLista;
      }
    );
  }

  buscar() {
    if (this.nome === null || this.nome === '') {
      this.cardapioService.produtosCardapio().subscribe(
        produtos => {
          this.produtos = produtos;
        }
      );
    } else if (this.nome !== null && this.nome !== '') {
      this.cardapioService.produtosPorNomeCardapio(this.nome).subscribe(
        response => {
          this.produtos = response;
        }
      );
    }
  }
}
