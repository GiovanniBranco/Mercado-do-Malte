import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Cliente from "../../models/Client";
import Endereco from "../../models/Address";
import EnderecoShow from "../../models/AddressShow";

import api from "../../services/api";
import apiViaCep from "../../services/viacep-api";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    boxSizing: "border-box",
    maxWidth: "30rem",
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(0),
      width: "100vw",
    },
    padding: "1rem",
    marginTop: "3rem",
    marginBottom: "3rem",
    boxShadow: "0 0 2px black",
  },
  title: {
    textAlign: "center",
    fontSize: "2.4rem",
    color: "var(--green-500)",
    fontWeight: 700,
  },
  group: {
    padding: theme.spacing(0),
    width: "100%",
  },
  groupButtons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0",
    textDecoration: "none",
  },
  buttonCadastrar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--green-500)",
    color: "#fff",
    fontWeight: "600",
    width: "80%",
    "&:hover": {
      backgroundColor: "var(--green-light)",
    },
  },
  buttonVoltar: {
    display: "flex",
    borderColor: "var(--green-500)",
    color: "var(--green-500)",
    fontWeight: "600",
    width: "80%",
    "&:hover": {
      backgroundColor: "var(--green-light)",
      borderColor: "var(--green-light)",
      color: "#fff",
    },
  },
  link: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    width: "100%",
  },
}));

export default function Register() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");

  var endereco = new Endereco();

  async function ObterEndereco(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    endereco[name] = target.value.replace(/[^0-9]/, "");
    let cep = parseInt(endereco.cep);

    try {
      const resposta = await apiViaCep.get(`/${cep}/json`);
      let enderecoShow = new EnderecoShow(resposta.data);

      setBairro(enderecoShow.bairro);
      setCidade(enderecoShow.cidade);
      setLogradouro(enderecoShow.logradouro);
      // console.log(endereco);
    } catch (error) {
      console.log(error);
      alert("Ops, não foi possivel obter o endereço, favor verifique o CEP");
    }
  }

  function handleSubmit(event) {
    const enderecos = new Endereco({
      cep: cep,
      numero: numero,
      complemento: complemento,
    });

    const cliente = new Cliente(
      {
        email: email,
        username: userName,
        senha: senha,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        dataNascimento: dataNascimento,
        enderecos: [
          {
            cep: cep,
            numero: numero,
            complemento: complemento,
          },
        ],
      },
      enderecos
    );

    event.preventDefault();

    return new Promise((resolve, reject) => {
      return api
        .post("/cliente", cliente)
        .then((response) => {
          console.log(response);
          alert("Cliente cadastrado com sucesso");
          window.open("/login", "_self")
        })

        .catch((error) => {
          console.log(error);
          alert("Não foi possível realizar o cadastro :(");
        });
    });
  }

  return (
    <Container maxWidth="sm">
      <form action="" className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={classes.title}>Cadastro</h1>
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="email"
              label="Email"
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="username"
              label="Username"
              type="text"
              name="username"
              onChange={(event) => setUserName(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="senha"
              label="Senha"
              type="password"
              name="senha"
              onChange={(event) => setSenha(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="nome"
              label="Nome Completo"
              type="text"
              name="nome"
              onChange={(event) => setNome(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="cpf"
              label="CPF"
              type="text"
              name="cpf"
              onChange={(event) => setCpf(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} zeroMinWidth>
            <TextField
              id="dataNascimento"
              label="Data de Nascimento"
              type="date"
              name="dataNascimento"
              onChange={(event) => setDataNascimento(event.target.value)}
              defaultValue="2017-05-24"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="telefone"
              label="Telefone"
              type="text"
              name="telefone"
              // value={cliente.telefone}
              onChange={(event) => setTelefone(event.target.value)}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              placeholder="(21) 99999-9999"
            />
          </Grid>

          <Grid item xs={6} sm={6} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              // error
              id="cep"
              label="CEP"
              type="text"
              name="cep"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
              onBlur={ObterEndereco}
              // helperText="Campo obrigatório"
              variant="outlined"
              size="small"
              placeholder="25900-000"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="logradouro"
              label="Logradouro"
              type="text"
              name="logradouro"
              value={logradouro}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6} sm={3} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="numero"
              label="Nº"
              type="text"
              name="numero"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6} sm={4} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="bairro"
              label="Bairro"
              type="text"
              name="bairro"
              value={bairro}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={6} sm={5} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="cidade"
              label="Cidade"
              type="text"
              name="cidade"
              value={cidade}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              id="complemento"
              label="Complemento"
              type="text"
              name="complemento"
              value={complemento}
              onChange={(event) => setComplemento(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth className={classes.groupButtons}>
            <Button
              variant="contained"
              className={classes.buttonCadastrar}
              onClick={handleSubmit}
            >
              Cadastrar
            </Button>
          </Grid>

          <Grid item xs={12} zeroMinWidth className={classes.groupButtons}>
            <Link to="/" className={classes.link}>
              <Button variant="outlined" className={classes.buttonVoltar}>
                Voltar
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
