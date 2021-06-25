import axios from "axios";
import utilStorage from "../utils/storage";

const API = axios.create({baseURL: "https://ecommerce-serratec.herokuapp.com/"});

API.interceptors.request.use((config) => {
  let token = utilStorage.obterTokenNaStorage();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default API;
