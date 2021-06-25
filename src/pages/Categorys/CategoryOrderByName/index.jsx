import React from "react";

import API from "../../../services/api";
import Cards from "../../../components/Cards";
import Product from "../../../models/Product";
import CategoryOrderBy from "../../../components/CategoryOrderBy";
import format from "../../../utils/format";

import { ContainerMain } from "../../../components/Cards/style";

export default class CategoryOrderByName extends React.Component {
  state = {
    products: [],
    category: "",
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const { category } = this.props.match.params;

    this.setState({category: category});

    const response = await API.get(`/produto/categoria/${category}`);
    this.setState({
      products: response.data.map((product) => new Product(product)),
    });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <CategoryOrderBy categoria={this.state.category}/>
        <ContainerMain>
          {format.sortByName(products).map((product) => {
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
