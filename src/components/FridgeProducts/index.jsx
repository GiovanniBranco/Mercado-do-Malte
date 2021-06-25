import React from "react";

import format from "../../utils/format";

import {
  DivProduto,
  ImagemProdutoNoCarrinho,
  DescricaoProduto,
  DivAdicionarItem,
  MostrarQuantidade,
  EntregaPedido,
  DivBotao,
} from "./styled";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useState } from "react";

const FridgeProducts = (props) => {
  const [quantidade, setQuantidade] = useState(props.produto.quantidade);

  return (
    <DivProduto aparecer={""}>
      <ImagemProdutoNoCarrinho
        src={`https://ecommerce-serratec.herokuapp.com/produto/${props.produto.nome}/imagem`}
      ></ImagemProdutoNoCarrinho>
      <DescricaoProduto>
        {format.formatWords(props.produto.nome)}
      </DescricaoProduto>
      <DivAdicionarItem>
        <DivBotao>
          <AddCircleIcon
            onClick={() => {
              let produtos = JSON.parse(localStorage.getItem("produtos"));
              produtos.map((p) => {
                if (p.nome === props.produto.nome) {
                  setQuantidade((p.quantidade += 1));

                  localStorage.setItem("produtos", JSON.stringify(produtos));
                }
              });
              props.atualizarTotal();
            }}
          />
        </DivBotao>
        <MostrarQuantidade>{quantidade}</MostrarQuantidade>
        <DivBotao>
          <RemoveCircleOutlineIcon
            onClick={() => {
              let produtos = JSON.parse(localStorage.getItem("produtos"));
              produtos.map((p, index) => {
                if (p.nome === props.produto.nome) {
                  setQuantidade((p.quantidade -= 1));
                  if (p.quantidade == 0) {
                    produtos.splice(index, 1);
                  }
                  localStorage.setItem("produtos", JSON.stringify(produtos));
                }
              });
              props.atualizarTotal();
            }}
          />
        </DivBotao>
      </DivAdicionarItem>
      <EntregaPedido>7 dias úteis</EntregaPedido>
      <h5>{format.formatForReal(quantidade * props.produto.preco)}</h5>
    </DivProduto>
  );
};

export default FridgeProducts;
