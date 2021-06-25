export default class Client {
  
  constructor(cliente, endereco) {

    cliente = cliente || {};

    this.email = cliente.email;
    this.username = cliente.username;
    this.senha = cliente.senha;
    this.nome = cliente.nome;
    this.cpf = cliente.cpf;
    this.telefone = cliente.telefone;
    this.dataNascimento = cliente.dataNascimento;
    this.enderecos = [endereco];
  }
}
