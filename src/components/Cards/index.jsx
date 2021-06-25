import React from "react";
import { Link } from "react-router-dom";

import format from "../../utils/format";

import { Card, ImagemCard, Conteudo } from "./style";

export default function Cards(props) {
  return (
      <Link to={`products/${props.nome}/details`}>
        <Card key={props.nome} mt={50}>
          <ImagemCard
            src={`https://ecommerce-serratec.herokuapp.com/produto/${props.nome}/imagem`}
          ></ImagemCard>
          <Conteudo>
            <h5>
              <strong>{format.formatWords(props.nome)}</strong>
            </h5>
            <h6>{format.formatWords(props.categoria)}</h6>
            <h3>
              <strong>{format.formatForReal(props.valor)}</strong>
            </h3>
          </Conteudo>
        </Card>
      </Link>
  );
}
