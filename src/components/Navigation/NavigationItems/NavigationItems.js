import React from "react";
import { connect } from "react-redux";
import classes from "./NavigationItems.module.css";
import NavigationItems from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItems link="/" exact>
        <i className="fa fa-lg fa-fw fa-calendar"></i>{" "}
        <span className="menu-item-parent">Dashboard</span>
      </NavigationItems>
      {Number(props.role) !== 0 ? (
        <NavigationItems link="/users">
          <i className="fa fa-lg fa-fw fa-table"></i>{" "}
          <span className="menu-item-parent">Users</span>
        </NavigationItems>
      ) : (
        <>
          <NavigationItems link="/agent">
            <i className="fa fa-lg fa-fw fa-table"></i>{" "}
            <span className="menu-item-parent">Shipping Agent</span>
          </NavigationItems>

          <NavigationItems link="/arrivals">
            <i className="fa fa-lg fa-fw fa-table"></i>{" "}
            <span className="menu-item-parent">Arrivals</span>
          </NavigationItems>

          <NavigationItems link="/newdata">
            <i className="fa fa-lg fa-fw fa-table"></i>{" "}
            <span className="menu-item-parent">Add</span>
          </NavigationItems>
        </>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  role: state.auth.role,
});

export default connect(mapStateToProps, null)(navigationItems);
