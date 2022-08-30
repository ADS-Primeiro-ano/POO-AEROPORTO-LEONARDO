export class Bagagem {
  private id: number;
  private peso: number;

  constructor(peso: number) {
    this.id = Math.random() * (100 * 100000);
    this.peso = peso;
  }

  public setPeso(peso: number){
    this.peso = peso
    return this.peso
  }
}