import React from "react";
import classes from "../style/Button.module.css";
const Button = ({ children }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;
