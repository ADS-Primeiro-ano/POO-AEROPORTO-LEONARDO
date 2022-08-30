export class Aviao {
  private id: number;
  private codigo: string;
  private carga: number;
  private qtdEconomica: number;
  private qtdPrimeira: number;
  private qtdExecutiva: number;

  constructor(
    codigo: string,
    carga: number,
    qtdEconomica: number,
    qtdPrimeira: number,
    qtdExecutiva: number,
  ) {
    this.id = Math.random() * (100 * 100000);
    this.codigo = codigo;
    this.carga = carga;
    this.qtdPrimeira = qtdPrimeira;
    this.qtdEconomica = qtdEconomica;
    this.qtdExecutiva = qtdExecutiva;
  }

  public setCodigo(codigo: string){
    this.codigo = codigo
    return this.codigo
  }

  public setCarga(carga: number){
    this.carga = carga
    return this.carga
  }

  public qtdePrimeira(qtdePrimeira: number){
    this.qtdPrimeira = qtdePrimeira
    return this.qtdPrimeira
  }

  public qtdeEconomica(qtdeEconomica: number){
    this.qtdEconomica = qtdeEconomica
    return this.qtdEconomica
  }
  
  public qtdeExecutiva(qtdExecutiva: number){
    this.qtdExecutiva = qtdExecutiva
    return this.qtdExecutiva
  }

}
