import React from "react";
import Form from "./signup/Form";
import Illestration from "./signup/Illestration";
import classes from "../style/SignUp.module.css";
import TextInput from "./signup/TextInput";
import Checkbox from "../pages/Checkbox";

const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div class="column">
        <Illestration />
        <Form className={`${classes.signup} form`}>
          <TextInput type="text" placeholder="Enter your name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter your Email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter your password"
            icon="lock"
          />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the terms &amp; Conditions" />
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
