import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Order(props) {

  return (
    <OrderBy>
      <span>Ordernar por: </span>
      <Link to={`/categorys/${props.categoria}/order-by-smaller`}>Menor preço</Link>
      <span> - </span>
      <Link to={`/categorys/${props.categoria}/order-by-bigger`}>Maior preço</Link>
      <span> - </span>
      <Link to={`/categorys/${props.categoria}/order-by-name`}>Nome</Link>
    </OrderBy>
  );
}

const OrderBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  color: var(--gray-800);
  margin-top: 2rem;

  span + a {
    margin-left: 0.5rem;
  }

  a + span {
    margin-left: 0.5rem;
  }

  a {
    color: var(--gray-800);

    :hover {
      color: var(--dark);
    }
  }
`;
