import React from "react";
import classes from "../../style/TextInput.module.css";
const TextInput = ({ icon, ...rest }) => {
  return (
    <div class={classes.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> person </span>
    </div>
  );
};

export default TextInput;
