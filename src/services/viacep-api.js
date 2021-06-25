import axios from 'axios'

const APIVIACEP =  axios.create({baseURL:`http://viacep.com.br/ws`})

export default APIVIACEP;