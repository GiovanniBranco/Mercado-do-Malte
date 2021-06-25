import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import PaymentIcon from "@material-ui/icons/Payment";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ReceiptIcon from "@material-ui/icons/Receipt";

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
    border: "2px solid #ddd",
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
  input: {
    width: "100%",
  },
  data: {
    paddingRight: "20px",
    width: "100px",
  },
  cvv: {
    maxWidth: "90px",
  },

  divIcons: {
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-around",
  },
  icons: {
    paddingRight: "20px",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  const limparStorage = () => {
    alert("Pagamento realizado sucesso!");
    localStorage.removeItem("produtos");
    window.open("/", "_self");
  };

  return (
    <Container maxWidth="sm" className={classes.divForm}>
      <form action="" className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={classes.title}>Opções de Pagamento</h1>
          </Grid>

          <Grid item xs={12} zeroMinWidth className={classes.divIcons}>
            <PaymentIcon style={{ fontSize: 40 }} />
            <AccountBalanceIcon style={{ fontSize: 40 }} />
            <ReceiptIcon style={{ fontSize: 40 }} />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              id="outlined-basic"
              label="Número do cartão"
              variant="outlined"
              className={classes.group}
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <FormControl variant="outlined" className={classes.data}>
              <InputLabel id="demo-simple-select-outlined-label">
                Mes
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Mes"
              >
                <MenuItem value={1}>01</MenuItem>
                <MenuItem value={2}>02</MenuItem>
                <MenuItem value={3}>03</MenuItem>
                <MenuItem value={4}>04</MenuItem>
                <MenuItem value={5}>05</MenuItem>
                <MenuItem value={6}>06</MenuItem>
                <MenuItem value={7}>07</MenuItem>
                <MenuItem value={8}>08</MenuItem>
                <MenuItem value={9}>09</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.data}>
              <InputLabel id="demo-simple-select-outlined-label">
                Ano
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Ano"
                className={classes.input}
              >
                <MenuItem value={1}>2021</MenuItem>
                <MenuItem value={2}>2022</MenuItem>
                <MenuItem value={3}>2023</MenuItem>
                <MenuItem value={4}>2024</MenuItem>
                <MenuItem value={5}>2025</MenuItem>
                <MenuItem value={6}>2026</MenuItem>
                <MenuItem value={7}>2027</MenuItem>
                <MenuItem value={8}>2028</MenuItem>
                <MenuItem value={9}>2029</MenuItem>
                <MenuItem value={10}>2030</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="CVV"
              variant="outlined"
              className={classes.cvv}
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              id="outlined-basic"
              label="Nome Completo"
              variant="outlined"
              className={classes.group}
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.group}
            />
          </Grid>

          <Grid item xs={12} zeroMinWidth className={classes.groupButtons}>
            <Button
              variant="contained"
              className={classes.buttonEntrar}
              onClick={limparStorage}
            >
              Finalizar Compra
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

// <Grid item xs={8} container spacing={3}>
//   {/* <Grid item xs={8} zeroMinWidth> */}
//   <form action="">
//     <Grid item xs={12} zeroMinWidth>
//       <h2>Opcoes de pagamento</h2>
//     </Grid>
//     <Grid item xs={12} zeroMinWidth>
//       <form action="">
//         <TextField id="outlined-basic" label="Numero do cartao" variant="outlined" />
//       </form>
//     </Grid>
//     <Grid item xs={6} zeroMinWidth>
//       <FormControl variant="outlined">
//         <InputLabel id="demo-simple-select-outlined-label">
//           Mes
//               </InputLabel>
//         <Select
//           labelId="demo-simple-select-outlined-label"
//           id="demo-simple-select-outlined"
//           label="Mes"
//         >
//           <MenuItem value={1}>01</MenuItem>
//           <MenuItem value={2}>02</MenuItem>
//           <MenuItem value={3}>03</MenuItem>
//           <MenuItem value={4}>04</MenuItem>
//           <MenuItem value={5}>05</MenuItem>
//           <MenuItem value={6}>06</MenuItem>
//           <MenuItem value={7}>07</MenuItem>
//           <MenuItem value={8}>08</MenuItem>
//           <MenuItem value={9}>09</MenuItem>
//           <MenuItem value={10}>10</MenuItem>
//           <MenuItem value={11}>11</MenuItem>
//           <MenuItem value={12}>12</MenuItem>
//         </Select>
//       </FormControl>
//     </Grid>
//     <Grid item xs={6} zeroMinWidth>
//       <FormControl variant="outlined">
//         <InputLabel id="demo-simple-select-outlined-label">
//           Ano
//               </InputLabel>
//         <Select
//           labelId="demo-simple-select-outlined-label"
//           id="demo-simple-select-outlined"
//           label="Ano"
//         >
//           <MenuItem value={1}>2021</MenuItem>
//           <MenuItem value={2}>2022</MenuItem>
//           <MenuItem value={3}>2023</MenuItem>
//           <MenuItem value={4}>2024</MenuItem>
//           <MenuItem value={5}>2025</MenuItem>
//           <MenuItem value={6}>2026</MenuItem>
//           <MenuItem value={7}>2027</MenuItem>
//           <MenuItem value={8}>2028</MenuItem>
//           <MenuItem value={9}>2029</MenuItem>
//           <MenuItem value={10}>2030</MenuItem>
//         </Select>
//       </FormControl>
//     </Grid>
//     <Grid item xs={12} zeroMinWidth>
//       <TextField id="outlined-basic" label="CVV" variant="outlined" />
//     </Grid>
//   </form>
//   {/* <h2>Detalhes do comprador</h2>
//     <form action="">
//       <TextField id="outlined-basic" label="Nome Completo" variant="outlined" />

//       <TextField id="outlined-basic" label="Email" variant="outlined" />
//     </form> */}
//   {/* </Grid> */}
// </Grid>
/* <Grid item xs={4} zeroMinWidth>
        <Paper className={classes.paper}>container direito</Paper>
      </Grid> */
// </div>
//   );
// }
