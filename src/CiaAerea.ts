export class CiaAerea{
    private id: number
    private nome: string

    constructor(
        nome: string,
    ){
        this.id = Math.random() * (100 * 100000);
        this.nome = nome;
    }

    public setNome(nome:string){
        this.nome = nome
        return this.nome
    }
}