import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetchData } from "../../state/products/actions";
import Text from "../elements/Text";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import PageContainer from "../components/PageContainer";

class ProductsPage extends Component {
  state = {
    error: "",
    data: []
  };
/*
  componentDidMount() {
    const url = "https://nanotu.be/products";
    Client.GET(url)
      .then(data => {
        this.setState({ data: data.products });
      })
      .catch(() => {
        this.setState({ error: "Could not load data" });
      });
  }*/

  render() {
    return (
      <PageContainer tilte="products">
        <Text>All products:</Text>
        {this.state.data ? (
          <List list={this.state.data} />
        ) : (
          <Text>Loading...</Text>
        )}
        <ErrorMessage>{this.state.error}</ErrorMessage>
      </PageContainer>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  hasError: state.products.productsHasError,
  isLoading: state.products.productsIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(productsFetchData(url))
});

ProductsPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);