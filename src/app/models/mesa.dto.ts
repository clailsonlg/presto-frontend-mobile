import { Pedido } from 'src/app/models/pedido';
export class MesaDTO {
    cliente: {
        nome: String
    }
    id: number;
    nome: String;
    nomeRestaurante: String;
    pedido: Pedido;
    status: String;
}