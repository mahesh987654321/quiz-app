import React from "react";
import classes from "../style/ProgressBar.module.css";
const ProgessBar = () => {
  return (
    <div>
      <div className={classes.progressBar}>
        <div className={classes.backButton}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip}>24% Cimplete!</div>
          <div className={classes.rangeBody}>
            <div className={classes.progress} style={{ width: "20%" }}></div>
          </div>
        </div>
        <a href="result.html">
          <button className={`${classes.button} ${classes.next}`}>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProgessBar;
