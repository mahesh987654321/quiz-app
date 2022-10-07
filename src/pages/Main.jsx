import React from "react";

import classes from "../style/Main.module.css";
import Nav from "./Nav";
const Main = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Main;
