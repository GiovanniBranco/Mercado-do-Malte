import React from "react";

import Cards from "../../components/Cards";
import API from "../../services/api";
import Product from "../../models/Product";
import format from "../../utils/format";
import OrderBy from "../../components/OrderBy";

import { ContainerMain } from "../../components/Cards/style";

export default class Home extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await API.get("/produto");
    this.setState({
      products: response.data.map((product) => new Product(product)),
    });
  };

  render() {
    const { products } = this.state;

    return (
      <>
      <OrderBy />
      <ContainerMain>
        {format.shuffleArray(products).map((product) => {
          return (
            <Cards
              url={product.url}
              nome={product.nome}
              categoria={product.categoria}
              valor={product.valor}
            />
          );
        })}
      </ContainerMain>
      </>
    );
  }
}

