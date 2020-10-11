import React, { useState, useEffect } from "react";

import NavTabs from "../UI/NavTabs/Navtabs";
import { connect } from "react-redux";
import classes from "./ShippingAgentOption.module.css";

const ShippingAgentOptions = React.memo((props) => {
  const [selectedTabOptions, setSelectedTabOptions] = useState(0);

  return (
    <>
      <div className={classes.ShippingAgentOptions}>
        <div className="row">
          <div className="col-lg-12">
            <NavTabs
              isPill={true}
              activeTab={selectedTabOptions}
              onClickTabItem={setSelectedTabOptions}
            >
              <div
                isPrimary={true}
                label={
                  <>
                    Home&nbsp; <i className="fa fa-home"></i>
                  </>
                }
                className="tab-pane"
              >
                {/* <AddressDetails
                code={props.code}
                // details={props.AddressDetails}
                // loading={props.companyDetailsLoading}
              /> */}
                Vessels &nbsp; Personels
              </div>

              <div
                label={
                  <>
                    {" "}
                    Calendar &nbsp;{" "}
                    <span className="badge bg-color-blue txt-color-white">
                      0
                    </span>
                  </>
                }
                className="tab-pane"
              >
                agenda
              </div>
            </NavTabs>
          </div>
        </div>
      </div>
    </>
  );
});

export default ShippingAgentOptions;
