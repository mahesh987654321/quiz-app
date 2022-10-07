import React from "react";
import classes from "../../style/SignUp.module.css";
import images from "../../assets/html/images/signup.svg";
const Illestration = () => {
  return (
    <div>
      <div class={classes.illustration}>
        <img src={images} alt="Signup" />
      </div>
    </div>
  );
};

export default Illestration;
