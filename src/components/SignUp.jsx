import React from "react";
import Form from "./signup/Form";
import Illestration from "./signup/Illestration";
import classes from "../style/SignUp.module.css";
const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div class="column">
        <Illestration />
        <Form className={`${classes.signup} form`} />
      </div>
    </div>
  );
};

export default SignUp;
