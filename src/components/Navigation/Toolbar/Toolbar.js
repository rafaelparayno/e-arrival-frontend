import React from "react";

import classes from "./Toolbar.module.css";

// import Logo from "../../Logo/Logo";
import DrawerToggler from "../SideDrawer/DrawerToggler/DrawerToggler";
import { NavLink } from "react-router-dom";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerOpen} />
        
        <nav >
            <ul className={classes.NavigationItems}>
                <li className={classes.NavigationItem}>
                    <NavLink
                        to="/logout"
                        activeClassName={classes.active}
                    >
                        Logout
                   </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default toolbar;
