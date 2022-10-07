import React from "react";
import classes from "../style/Account.module.css";
const Account = () => {
  return (
    <div>
      <div className={classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="signup.html">Signup</a>
        <span className="material-icons-outlined" title="Logout">
          logout
        </span>
      </div>
    </div>
  );
};

export default Account;
