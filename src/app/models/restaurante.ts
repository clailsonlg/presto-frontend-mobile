import { Cardapio } from './cardapio';
import { Mesa } from './mesa';
import { Produto } from './produto';
import { Usuario } from './usuario';

export class Restaurante {
  id: number;
  nome: string;
  cardapio: Cardapio;
  produto: Produto[];
  mesa: Mesa[];
  usuarios: Usuario;
}
