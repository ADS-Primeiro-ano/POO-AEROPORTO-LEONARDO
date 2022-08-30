export class Aeroporto {
    private id: number
    private nome: string
    private codigo: string

    constructor(
        nome: string,
        codigo: string,
    ){
        this.id = Math.random() * (100 * 100000);
        this.nome = nome;
        this.codigo = codigo;
    }

    public setNome(nome: string){
        this.nome = nome
        return this.nome
    }

    public setCodigo(codigo: string){
        this.codigo = codigo
        return this.codigo
    }

    
}