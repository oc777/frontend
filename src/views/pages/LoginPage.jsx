import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";
import Text from "../elements/Text";

const defaultProps = {
  admin: "",
  errorMessage: ""
};

const propTypes = {
  admin: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

const LoginPage = ({ admin, isLoggedIn, errorMessage }) => (
  <Modal>
    <PageTitle center>Login</PageTitle>
    <LoginForm admin={admin} />
    {isLoggedIn ? <Redirect to="/" /> : null}
    {errorMessage ? <Text error>`${errorMessage}`</Text> : null}
  </Modal>
);

const mapStateToProps = state => ({
  isLoggedIn: state.session.loggedInAs.isLoggedIn,
  errorMessage: state.session.loginHasError.errorMessage,
  isLoading: state.session.loginIsLoading
});

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;
export default connect(mapStateToProps)(LoginPage);
