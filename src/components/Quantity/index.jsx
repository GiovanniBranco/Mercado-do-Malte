import React, { useState } from "react";
import styled from "styled-components";

export default function Quantity(props) {
  const { nome, urlImagem, valor } = props.product;
  const [quantidade, setQuantidade] = useState(0);

  const handleAdd = () => {
    setQuantidade(quantidade + 1);
    setProductStorage(Number(document.querySelector(".qtdProdutos").value) + 1);
    localStorage.setItem("msg", "cliquei");
  };

  const handleRmv = () => {
    if (quantidade === 1) {
      return;
    }
    setQuantidade(quantidade - 1);
    setProductStorage(Number(document.querySelector(".qtdProdutos").value) - 1);
  };

  const setProductStorage = (quantidade) => {
    let obj = {
      nome: nome,
      url: urlImagem,
      preco: valor,
      quantidade: quantidade,
    };
    if (obj.nome === "") {
      alert("Adicione no minímo 1 item!")
      return;
    } else {
      localStorage.setItem("produto", JSON.stringify(obj));
    }
  };

  return (
    <Container>
      <span>Quantidade:</span>
      <button className="button-add" onClick={handleRmv}>
        -
      </button>
      <input
        type="text"
        value={quantidade}
        id="input"
        className="qtdProdutos"
        min="1"
        max="999"
      />
      <button className="button-rmv" onClick={handleAdd}>
        +
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 80px;
    height: 2rem;
    border: 1px solid var(--gray-200);
    border-radius: 8px;
    margin-left: 1rem;

    color: #00b34f;
    text-align: center;
  }

  .button-add {
    position: absolute;
    left: 63%;
    border: none;
    background: transparent;
  }

  .button-rmv {
    position: absolute;
    left: 90%;
    border: none;
    background: transparent;
  }
`;
