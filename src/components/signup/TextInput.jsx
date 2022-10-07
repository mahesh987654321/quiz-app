import React from "react";
import classes from "../../style/TextInput.module.css";
const TextInput = ({ type, placeholder }) => {
  return (
    <div class={classes.textInput}>
      <input type={type} placeholder={placeholder} />
      <span class="material-icons-outlined"> person </span>
    </div>
  );
};

export default TextInput;
