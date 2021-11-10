import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button onClick={props.func} className="btn">
      {props.value}
    </button>
  );
};
Button.proptypes = {
  value: PropTypes.string,
  func: PropTypes.func,
};

export default Button;
