export class Endereco {
    private id: number
    private rua: string
    private numero: number
    private complemento: string
    private bairro: string
    private cidade: string
    private estado: string
    private pais: string

    constructor(
        rua: string,
        numero: number,
        complemento: string,
        bairro: string,
        cidade: string,
        estado: string,
        pais: string,
    ){
        this.id = Math.random() * (100 * 100000);
        this.rua = this.rua;
        this.numero = this.numero;
        this.complemento = this.complemento;
        this.bairro = this.bairro;
        this.cidade = this.cidade;
        this.estado = this.estado;
        this.pais = this.pais;
    }
}
