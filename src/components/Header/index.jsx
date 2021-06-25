import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import storage from "../../utils/storage";

import style from "./index.module.scss";

export default function Header() {
  const logado = localStorage.getItem("token");

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={style.navbar}>
      <Navbar.Brand href="/">
        <img src="https://img.icons8.com/officel/40/000000/beer.png" alt="Logo"/>
        <span>
          <strong>Mercado do Malte</strong>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/categorys/artesanais">Artesanais</Nav.Link>
          <Nav.Link href="/categorys/nacionais">Nacionais</Nav.Link>
          <Nav.Link href="/categorys/importadas">Importadas</Nav.Link>
        </Nav>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>

      {logado != null ? (
        <>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              className={style.login}
              onClick={storage.removerAutenticacao}
            >
              Logout
            </Nav.Link>
          </Nav>
          <Nav.Link href="/fridge">
            <img src="https://img.icons8.com/glyph-neue/35/26e07f/fridge.png" alt="Geladeira"/>
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/login" className={style.login}>
              Login
            </Nav.Link>
            <Nav.Link href="/register">Cadastro</Nav.Link>
          </Nav>
          {logado != null ? (
            <Nav.Link href="/fridge">
              <img src="https://img.icons8.com/glyph-neue/35/26e07f/fridge.png" alt="geladeira"/>
            </Nav.Link>
          ) : (
            <></>
          )}
        </>
      )}
    </Navbar>
  );
}
