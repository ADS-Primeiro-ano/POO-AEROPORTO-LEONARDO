import Endereco from "./Endereco"

export abstract class Pessoa {
  protected id: number;
  protected nome: string;
  protected email: string;
  protected telefone: string;
  protected usuario: string;
  protected senha: string;
  protected dataNascimento: Date;

  constructor(
    nome: string,
    email: string,
    telefone: string,
    usuario: string,
    senha: string,
    dataNascimento: Date) {
    this.id = Math.random() * (100 * 100000);
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.usuario = usuario;
    this.senha = senha;
    this.dataNascimento = dataNascimento;
  }
  
  Endereco
}
