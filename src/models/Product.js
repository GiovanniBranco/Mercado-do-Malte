export default class Product {

  constructor(obj){
      obj = obj || {};
              
      this.nome = obj.nome;
      this.quantidade = obj.quantidadeEstoque;
      this.descricao = obj.descricao;
      this.categoria = obj.categoria;
      this.valor = obj.preco;
      this.urlImagem = obj.url;
  }
}
