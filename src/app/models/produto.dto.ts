import { Cardapio } from "./cardapio";
import { Pedido } from "./pedido";

export interface ProdutoDTO {
  id: number;
  cardapio: Cardapio;
  pedido: Pedido[];
  nome: string;
  tipo: string;
  descricao: string;
  tempo: number;
  imagem: string;
  valor: number;
  quantidadeEstoque: number;
  contador: number;
  cardapioId: number;
}
