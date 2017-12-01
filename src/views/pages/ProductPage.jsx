import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageContainer from "../components/PageContainer";

const propTypes = {
  id: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const ProductPage = ({ id, products, location }) => {
  let product = products.filter(product => product._id === location.slice(-24));
  product = product[0];

  return (
    <PageContainer title={product.name}>
      <p>Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <p>Created By: {product.createdBy}</p>
      <p>Description: {product.description}</p>
      <p>Producer: {product.producer}</p>
      <p>Serial No: {product.serialNo}</p>
      <p>Files:</p>
      {/*product.files.map(file => <a href="https://nanotu.be{file}">{file}</a>)*/}
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  location: state.router.location.pathname
});

ProductPage.propTypes = propTypes;
export default connect(mapStateToProps)(ProductPage);
