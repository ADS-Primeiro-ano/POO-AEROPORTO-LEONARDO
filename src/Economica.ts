import { Bilhete } from "./Bilhete";
import { TipoBagagemEnum } from "./TipoBagagemEnum";

export class Economica extends Bilhete {
  protected maximoBagagens(): number {
    return TipoBagagemEnum.mao
  }
}