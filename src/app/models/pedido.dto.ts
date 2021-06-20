import { Produto } from "./produto";

export class PedidoDto {
    descricao: string;
    itensDoPedido: Produto[];
}
