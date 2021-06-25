export default class AddressShow {
  constructor(endereco) {
    endereco = endereco || {};

    this.cep = endereco.cep;
    this.numero = endereco.numero;
    this.complemento = endereco.complemento;
    this.logradouro = endereco.logradouro;
    this.bairro = endereco.bairro;
    this.cidade = endereco.localidade;
  }
}