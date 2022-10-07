import React from "react";
import Checkbox from "./Checkbox";
import classes from "../style/Answers.module.css";
const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="this os a text" />
    </div>
  );
};

export default Answers;
