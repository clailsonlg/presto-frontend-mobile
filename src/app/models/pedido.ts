import { Mesa } from "./mesa";

export class Pedido {
  id: number;
  mesa: Mesa;
  nome: string;
  descricao: string;
  valorTotal: number;
  maiorTempo: number;
  tempoIdeal: number;
  haraQueFoiFeito: number;
}
