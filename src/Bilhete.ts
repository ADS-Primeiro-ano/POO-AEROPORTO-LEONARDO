import { Bagagem } from "./Bagagem";
import { Passageiro } from "./Passageiro";
import { TipoBagagemEnum } from "./TipoBagagemEnum"
import { TipoBilheteEnum } from "./TipoBilheteEnum"
import { SituacaoBilheteEnum } from "./SituacaoBilheteEnum";

export abstract class Bilhete {
  private id: number;
  private numero: number;
  private assento: string;
  private passageiro: Passageiro;
  private bagagem: Bagagem;
  private maxpeso: TipoBagagemEnum;
  private peso: TipoBagagemEnum;
  private Disponivel: SituacaoBilheteEnum;
  private Reservado: SituacaoBilheteEnum;
  private Vendido: SituacaoBilheteEnum;
  constructor() {}

  public reservar(passageiro: Passageiro){
    if (this.passageiro !== undefined){
      this.Reservado = this.Reservado
      console.log("Bilhete reservado!")
    }else {
      this.passageiro = passageiro
      this.Disponivel = this.Disponivel
    }
  }

  public tipoBilhete(tipoBilhete: number){
    if (tipoBilhete == 10){
      this.id = TipoBilheteEnum.Economica
    } else if (tipoBilhete == 20){
      this.id = TipoBilheteEnum.Executiva
    }else{
      this.id = TipoBilheteEnum.Primeira
    }
    return console.log('Não há mais vagas neste avião, aguarde por outro!')
  }

  public getNumero(tipoBilhete: number): number{
    if(tipoBilhete = 10){
        this.numero = 32
    }else if(tipoBilhete = 20){
        this.numero = 12
    }else{
        this.numero = 24
    }
    return this.numero
}
  public getAssento(bilhete: number): string{
    if (bilhete == 10 ){
      this.assento = "A"
    } else if (bilhete == 20){
      this.assento = "B"
    } else{
      this.assento = "C"
    }
    return this.assento
  }

  public comprar(passageiro: Passageiro): void {
    if (this.passageiro !== undefined){
      console.log("Bilhete Reservado, seu bilhete é o N°" + this.id)
      console.log("Assento:" + this.assento + "Numero:" + this.numero)
    } else{
      this.passageiro = passageiro
      this.Vendido = this.Vendido
      console.log("Bilhete já foi vendido!")
    }
  }

  public cancelarReserva(): void {
    if(this.passageiro !== undefined){
    this.passageiro === undefined
    this.Disponivel = this.Disponivel
    console.log('Bilhete cancelado')
    }else{
      console.log("Você não possui nenhuma reserva!")
    }
  }

  public checkIn(): void {
    if (this.peso < this.maxpeso && this.passageiro !== undefined){
      this.maxpeso = this.peso
      console.log('Check-In concluido/aprovado!')
    }else {
      console.log('Você não possui um bilhete!')
    }
  }

  protected abstract maximoBagagens(): number;
}