import { Debito } from './Debito';
import { Credito } from "./Credito";

export class Ciclo {
  _id?: string;
  data!: Date;
  creditos!: Credito[];
  debitos!: Debito[];
  createdAt?: Date;
  updatedAt?: Date;
}
