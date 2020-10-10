import React, { useState } from "react";

import classes from "./Layout.module.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Logout from "../../containers/Auth/Logout/Logout";
import dashboard from "../../containers/dashboard/dashboard";
// import CalendarCon from "../../containers/CalendarCon/CalendarCon"
// import AddressBook from "../../containers/AddressBook/AddressBook"

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer((side) => !side);
  };

  return (
    <>
      <Toolbar drawerOpen={sideDrawerOpenHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
      <main className={classes.Content}>
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={dashboard} />
          {/* <Route path="/calendars" component={CalendarCon} />
                    <Route path="/address" component={AddressBook} /> */}
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
};

export default Layout;
