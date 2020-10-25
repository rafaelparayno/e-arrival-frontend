import React, { useState } from "react";

import classes from "./Layout.module.css";
import AdminRoute from "../../components/ProtectedRoute/AdminRoute";
import { Redirect, Route, Switch } from "react-router-dom";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Logout from "../../containers/Auth/Logout/Logout";
import dashboard from "../../containers/dashboard/dashboard";
import Users from "../../containers/Users/Users";
// import ShippingAgentCon from "../../containers/ShippingAgentCon/ShippingAgentCon";
// import ShippingAgentMore from "../../containers/ShippingAgentMore/ShippingAgentMore";
import ArrivalView from "../../containers/ArrivalView/ArrivalView";
import AddData from "../../containers/NewInputCon/AddData";
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
          <AdminRoute path="/users" exact component={Users} />
          {/* <Route path="/agent/:id" exact component={ShippingAgentMore} />
          <Route path="/agent" exact component={ShippingAgentCon} /> */}
          <Route path="/newdata" exact component={AddData} />
          <Route path="/arrivals" exact component={ArrivalView} />
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
