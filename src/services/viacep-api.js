import axios from "axios";

const APIVIACEP = axios.create({ baseURL: `https://viacep.com.br/ws` });

export default APIVIACEP;
