import { Produto } from "./produto";

export class Pedido {
  id: number;
  nome: string;
  descricao: string;
  valorTotal: number;
  maiorTempo: number;
  tempoIdeal: number;
  nomeCliente: string;
  horaQueFoiFeito: number;
  itensDoPedido: Produto[];
}
