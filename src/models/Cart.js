export default class Cart {
  constructor(cart, username) {
    cart = cart || {};

    this.username = username;
    this.produto = cart.produto;
    this.quantidade = cart.quantidade;
  }
}
