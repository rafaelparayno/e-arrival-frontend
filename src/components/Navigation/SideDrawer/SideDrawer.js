import React from "react";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";


const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    {/* <Logo /> */}
                   <h2>E-arrivaL</h2> 
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </>
    );

}

export default sideDrawer;