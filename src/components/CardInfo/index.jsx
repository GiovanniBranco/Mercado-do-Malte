import React from "react";

import DivContainer from "./style";

export default function CardInfo(props) {
  return (
    <DivContainer>
      <h1>
        <strong>{props.nome}</strong>
      </h1>
      <p>{props.descricao}</p>
      <h2>
        <strong>{props.valor}</strong>
      </h2>
      <h6>{props.categoria}</h6>
    </DivContainer>
  );
}
