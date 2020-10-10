import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "../../store/action/index";
import classes from "./UserHeader.module.css";

const UserHeader = (props) => {
  useEffect(() => {
    props.onFetchUser(props.userToken);
    // console.log(props.userToken);
  }, []);

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
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="row"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (token) => dispatch(fetchUserList(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
