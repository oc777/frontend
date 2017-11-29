import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.element.isRequired,
  access: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

const AuthRoute = ({ access, children, role }) => {
  if (role === access) {
    return children;
  }
  console.log(role);
  console.log(access);
  return <Redirect to="/" />;
};

const mapStateToProps = state => ({
  role: state.session.loggedInAs.role
});

AuthRoute.propTypes = propTypes;
export default connect(mapStateToProps)(AuthRoute);
