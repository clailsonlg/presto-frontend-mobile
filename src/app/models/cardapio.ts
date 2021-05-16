import { Produto } from "./produto";
import { Restaurante } from "./restaurante";

export class Cardapio {
  id: number;
  nome: string;
  cardapioRestaurante: Restaurante;
  produto: Produto[];
}
