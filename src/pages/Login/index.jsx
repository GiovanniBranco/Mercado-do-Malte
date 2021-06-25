import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import apiUsuario from "../../services/api-usuario";

import utilStorage from "../../utils/storage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  divForm: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    boxSizing: "border-box",
    maxWidth: "25rem",
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(0),
      width: "100vw",
    },
    border: "1px solid #ddd",
    padding: "8px",
    marginTop: "3rem",
    borderRadius: "5px",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#009640",
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  divTitleTerms: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontSize: "15px",
  },
  titleTerms: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "2.1875rem",
    fontSize: "14px",
    fontWeight: "600",
  },
  fieldTerms: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  terms: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    border: "none",
    outline: "none",
    width: "50%",
    alingItems: "center",
    fontSize: ".85em",
    marginBottom: "5px",
  },
  group: {
    padding: theme.spacing(0),
    width: "100%",
  },
  groupButtons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0",
  },
  buttonEntrar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#009640;",
    padding: "11px",
    color: "#fff",
    fontWeight: "600",
    width: "80%",
    marginBottom:"0",
    "&:hover": {
      backgroundColor: "#04D361",
    },
  },
  buttonRegister: {
    display: "flex",
    borderColor: "#009640",
    color: "#049843",
    fontWeight: "600",
    padding: "11px",
    width: "80%",
    "&:hover": {
      backgroundColor: "#04D361",
      color: "#fff",
    },
  },
  link: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    width: "100%",
  },
  divForget: {
    marginTop: "0",
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(0),

  },
  forget: {
    marginTop:"0",
    padding:"0",
    fontSize: "14px",
    color: "#04D361",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const efetuarLogin = () => {
    if (!username || !senha) {
      alert("Favor informar seu usuário e senha");
      return;
    }

    apiUsuario
      .logar(username, senha)
      .then((resposta) => {
        console.log(resposta);
        const token = resposta.data.Authorization;
        console.log(token);
        utilStorage.salvarTokenNaStorage(token);
        salvarUsuario();
        window.open("/", "_self");
      })
      .catch((erro) => {
        alert("Não foi possível efetual o login");
        console.log(erro);
      });
  };

  const salvarUsuario = () => {
    utilStorage.salvarCliente(username);
  };

  useEffect(() => {
    let token = utilStorage.obterTokenNaStorage();

    if (token) {
      window.open("/", "_self");
    }
  });

  return (
    <Container maxWidth="sm" className={classes.divForm}>
      <form action="" className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={classes.title}>Login</h1>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.description}>
              {"Antes de continuar, faça seu login ou inicie um cadastro."}
            </Typography>
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="username"
              label="Username"
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <TextField
              className={classes.group}
              required
              id="senha"
              label="Senha"
              type="password"
              name="senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} zeroMinWidth className={classes.groupButtons}>
            <Button
              variant="contained"
              className={classes.buttonEntrar}
              onClick={efetuarLogin}
            >
              Entrar
            </Button>
          </Grid>

          <Grid item xs={12} zeroMinWidth className={classes.divForget}>
              <a href="" className={classes.forget}>Esqueci minha senha</a>
          </Grid>

          <Grid item xs={12} zeroMinWidth className={classes.groupButtons}>
            <Link to="/register" className={classes.link}>
              <Button variant="outlined" className={classes.buttonRegister}>
                Cadastre-se em nossa loja
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            zeroMinWidth
            className={classes.divTitleTerms}
            container
            direction="column"
            wrap="nowrap"
            justify="center"
            alignItems="center"
          >
            <Typography className={classes.titleTerms}>
              {"Usamos seu cadastro de forma 100% segura para:"}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            zeroMinWidth
            className={classes.fieldTerms}
            container
            direction="column"
            wrap="nowrap"
            justify="center"
            alignItems="center"
          >
            <Typography className={classes.terms}>
              {"Identificar seu perfil"}
            </Typography>

            <Typography className={classes.terms}>
              {"Notificar sobre o andamento do seu pedido "}
            </Typography>

            <Typography className={classes.terms}>
              {"Gerenciar seu histórico de compras"}
            </Typography>

            <Typography className={classes.terms}>
              {"Acelerar o preenchimento de suas informações"}
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
