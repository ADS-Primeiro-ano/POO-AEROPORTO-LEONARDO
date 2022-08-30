import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
  private codigo: string;
  private contaCorrente: string;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    usuario: string,
    senha: string,
    dataNascimento: Date,
    codigo: string,
    contaCorrente: string) {
    super(nome, email, telefone, usuario, senha, dataNascimento)

    this.codigo = codigo;
    this.contaCorrente = contaCorrente;
  }
}