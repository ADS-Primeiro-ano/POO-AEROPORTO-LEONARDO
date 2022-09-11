export class Papel {
    private id: number
    private nome: string
    private descricao: string

    constructor(
        nome: string,
        descricao: string,
    ){
        this.id = Math.random() * (100 * 100000);
        this.nome = nome;
        this.descricao = descricao;
    }
}