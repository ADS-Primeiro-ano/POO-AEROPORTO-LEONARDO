import { Bilhete } from "./Bilhete";
import { TipoBagagemEnum } from "./TipoBagagemEnum";

export class Primeira extends Bilhete {
  protected maximoBagagens(): number {
    throw TipoBagagemEnum.nacional
  }
}