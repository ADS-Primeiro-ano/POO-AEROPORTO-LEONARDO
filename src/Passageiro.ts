import { Pessoa } from "./Pessoa";

export class Passageiro extends Pessoa {
  private documento: string;
  private numeroCartao: string;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    usuario: string,
    senha: string,
    dataNascimento: Date,
    documento: string,
    numeroCartao: string) {
    super(nome, email, telefone, usuario, senha, dataNascimento)

    this.documento = documento;
    this.numeroCartao = numeroCartao;
  }
}

