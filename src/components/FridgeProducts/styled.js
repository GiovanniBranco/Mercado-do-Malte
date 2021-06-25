import styled from "styled-components";

export const DivExterna = styled.div`
  width: 95%;

  margin: auto;
  display: grid;
  grid-gap: 0px 5px;
  flex-direction: column;
  justify-content: space-between;
  grid-template-columns: 80% 20%;
  padding: 15px;

  @media (max-width: 1000px) {
    flex-direction: row;
    grid-gap: 30px;
    grid-template-columns: 100%;
  }
`;
export const DivListaProdutos = styled.div`
  width: 100%;
`;
export const ListInformacao = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li:first-child {
    float: left;
  }

  li {
    float: right;
    margin-right: 9%;
    margin-bottom: 15px;
  }

  @media (max-width: 1200px) {
    li {
      float: right;
      margin-right: 7%;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Titulo = styled.h1`
  margin: 30px 0 30px 0;
`;

export const DivProduto = styled.div`
  width: 100%;
  border-top: 1px black solid;
  display: grid;
  grid-gap: 0px 20px;
  grid-template-columns: 20% 20% 10% 10% 10%;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  display: ${(props) => props.aparecer};
  justify-content: space-evenly;
  @media (max-width: 500px) {
    grid-template-columns: 25% 25% 10% 10%;
  }
`;
export const ImagemProdutoNoCarrinho = styled.img`
  height: 100px;
  margin: 0 auto;
`;

export const DescricaoProduto = styled.h5`
  align-self: auto;
`;

export const DivAdicionarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Conteudo = styled.div`
  padding: 10px;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MostrarQuantidade = styled.span`
  padding: 15px;
  border: solid gray 1px;
  border-radius: 3px;
  margin: 0 15px;

  @media (max-width: 800px) {
    padding: 5px;
    margin: 0 5px;
  }
`;

export const EntregaPedido = styled.p`
  display: block;

  @media (max-width: 500px) {
    display: none;
  }
`;

// parte da faturacao
export const DivFatura = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 400px;
  border: gray solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
  padding: 30px 10px;
  align-items: center;
  @media (max-width: 1000px) {
    margin-top: 40px;
    width: 300px;
    margin: auto;
    height: 300px;
  }
`;

export const DivQuantidadeData = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const DivPreco = styled.div`
  border-top: solid black 1px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 30px 0 30px;

  @media (max-width: 700px) {
    padding: 15px 0 15px;
  }
`;

export const ButtonPagamento = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: var(--green-500);

  padding: 10px;
  border-radius: 3px;
  font-size: 15px;
  outline: none;
  border: none;

  a {
    color: var(--white);
    text-decoration: none;
  }

  :hover {
    background: var(--green-light);
  }
`;

export const EntregaFatura = styled.p`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const DivBotao = styled.div`
  cursor: pointer;
`;
