import { Restaurante } from "./restaurante";

export class Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
  restaurantes: Restaurante[];
}
