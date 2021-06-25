import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import FridgeProducts from "../../components/FridgeProducts";
import format from "../../utils/format";

import {
  ListInformacao,
  Titulo,
  DivExterna,
  DivListaProdutos,
  DivFatura,
  ButtonPagamento,
  DivPreco,
  DivQuantidadeData,
  EntregaFatura,
} from "../../components/FridgeProducts/styled";
import { useState } from "react";

const Fridge = () => {
  // let produtos = JSON.parse(localStorage.getItem("produto")) || [];
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  
  const [total, setTotal] = useState(0);
  
  let valorTotal = 0;
  let totalProduto = 0;
  
  produtos.map((p) => {
    valorTotal += p.quantidade * p.preco;
    totalProduto += p.quantidade;
  });

  const atualizarTotal = () => {
    setTotal(total + valorTotal);
  }

  useEffect(() => {document.span = total});

  return (
    <div>
      <DivExterna>
        <DivListaProdutos>
          <Titulo>Minha geladeira</Titulo>

          <ListInformacao>
            <li>Produto</li>
            <li>Preço</li>
            <li>Entrega</li>
            <li>Quantidade</li>
          </ListInformacao>
          {produtos.map((produto, index) => {
            return (
              <FridgeProducts
                key={index}
                numero={index}
                produto={produto}
                atualizarTotal={atualizarTotal}
              ></FridgeProducts>
            );
          })}
        </DivListaProdutos>
        <DivFatura>
          <h4>Resumo do pedido</h4>
          <EntregaFatura>7 dias úteis</EntregaFatura>
          <DivQuantidadeData>
            <p>{totalProduto} produtos</p>
            <p>frete grátis</p>
          </DivQuantidadeData>
          <DivPreco>
            <p>Total</p>
            <span>{format.formatForReal(valorTotal)}</span>
          </DivPreco>
          <ButtonPagamento> <Link to={"/payment"}>Efetuar pagamento</Link></ButtonPagamento>
        </DivFatura>
      </DivExterna>
    </div>
  );
};

export default Fridge;
