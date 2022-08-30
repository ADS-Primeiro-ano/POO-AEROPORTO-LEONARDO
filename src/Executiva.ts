import { TipoBagagemEnum } from "./TipoBagagemEnum";
import { Bilhete } from "./Bilhete";

export class Executiva extends Bilhete {
  protected maximoBagagens(): number {
    return TipoBagagemEnum.internacional
  }
}
