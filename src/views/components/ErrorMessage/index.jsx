import React from "react";
import PropTypes from "prop-types";
import Text from "../../elements/Text";

const propTypes = {
  children: PropTypes.string
};

const defaultProps = {
  children: ""
};

const ErrorMessage = ({ children }) => <Text error>{children}</Text>;

ErrorMessage.defaultProps = defaultProps;
ErrorMessage.propTypes = propTypes;

export default ErrorMessage;