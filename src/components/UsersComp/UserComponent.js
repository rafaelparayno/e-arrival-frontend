import React, { useState, useEffect } from "react";
import classes from "./UserHeader.module.css";

const UserHeader = () => {
  return (
    <div className={classes.UsersHeader}>
      <header>
        <h3>User Information</h3>
      </header>
      <div className={classes.searchBar}>
        <div className={classes.Input}>
          <label className={classes.Label}>Search:</label>
          <input
            placeholder="Type here...."
            className={classes.InputElement}
            type="text"
          />
        </div>
        <button className={classes.btn} type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default UserHeader;
