import API from "./api";

function logar(username, senha) {
  return new Promise((resolve, reject) => {
    return API.post("/login", { username, senha })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function obterUser(username) {
  return new Promise((resolve, reject) => {
    return API.get(`/cliente/${username}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export default {
  logar,
  obterUser,
};
