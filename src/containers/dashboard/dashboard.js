import React from "react";
import classes from "./dashboard.module.css";

const dashboard = React.memo((props) => {
  return (
    <div className={classes.dashboard}>
      <h2>Dashboard</h2>
    </div>
  );
});

export default dashboard;
