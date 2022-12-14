export class Horario{
    private id: number
    private codigo: number
    private partida: Date
    private chegada: Date
    private qtdeEconomica: number
    private qtdePrimeira: number
    private qtdeExecutiva: number

    constructor(
        codigo: number,
        partida: Date,
        chegada: Date,
        qtdeEconomica: number,
        qtdePrimeira: number,
        qtdeExecutiva: number,
    ){
        this.id = Math.random() * (100 * 100000)
        this.codigo = codigo;
        this.partida = partida;
        this.chegada = chegada;
        this.qtdeEconomica = qtdeEconomica;
        this.qtdePrimeira = qtdePrimeira;
        this.qtdeExecutiva = qtdeExecutiva;
    }
}