import { Restaurante } from './restaurante';
import { Pedido } from './pedido';

export class Mesa {
  id: number;
  nome: string;
  pedido: Pedido;
  mesaRestaurante: Restaurante;
}
