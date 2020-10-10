import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItems from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItems link="/" exact>
        <i className="fa fa-lg fa-fw fa-calendar"></i>{" "}
        <span className="menu-item-parent">Dashboard</span>
      </NavigationItems>
      <NavigationItems link="/address">
        <i className="fa fa-lg fa-fw fa-table"></i>{" "}
        <span className="menu-item-parent">Users</span>
      </NavigationItems>

      {/* <NavigationItems link="/contacts">
        <i className="fa fa-lg fa-fw fa-table"></i>{" "}
        <span className="menu-item-parent">Conctacts</span>
      </NavigationItems> */}
    </ul>
  );
};

export default navigationItems;
