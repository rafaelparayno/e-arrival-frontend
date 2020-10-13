import React, { useState, useEffect } from "react";

import NavTabs from "../UI/NavTabs/Navtabs";
import { connect } from "react-redux";
import VesselDetails from "./ShippingAgentTabs/VesselsDetails/VesselsDetails";
import Crews from "./ShippingAgentTabs/CrewDetails/Crews";
import AgentAgenda from "./ShippingAgentTabs/AgendaDetails/AgentAgenda";
import classes from "./ShippingAgentOption.module.css";

const ShippingAgentOptions = React.memo((props) => {
  const [selectedTabOptions, setSelectedTabOptions] = useState(0);

  return (
    <>
      <div className={classes.ShippingAgentOptions}>
        <div className="row">
          <div style={{ overflow: "auto" }} className="col-lg-12">
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
                <VesselDetails code={props.code} /> &nbsp; <Crews />
              </div>

              <div label={<> Agency Calendar &nbsp; </>} className="tab-pane">
                <AgentAgenda code={props.code} />
              </div>
            </NavTabs>
          </div>
        </div>
      </div>
    </>
  );
});

export default ShippingAgentOptions;
