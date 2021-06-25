function salvarTokenNaStorage(token) {
  localStorage.setItem("token", token);
}

function salvarCliente(username) {
  localStorage.setItem("username", username);
}

function obterUserNaStorage() {
  return localStorage.getItem("username");
}

function obterTokenNaStorage() {
  return localStorage.getItem("token");
}

function removerAutenticacao() {
  localStorage.removeItem("token");
}

export default {
  salvarTokenNaStorage,
  obterTokenNaStorage,
  removerAutenticacao,
  salvarCliente,
  obterUserNaStorage,
};
