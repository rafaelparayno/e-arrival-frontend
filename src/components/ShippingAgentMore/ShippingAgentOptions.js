import React, { useState } from "react";

import NavTabs from "../UI/NavTabs/Navtabs";

import BasicInfoTab from "./NewTabs/BasicInfoTab";
import VesselInfoTab from "./NewTabs/VesselInfoTab";
import ArrivalDetailsTab from "./NewTabs/ArrivalDetailsTab";
import CrewDetailsTab from "./NewTabs/CrewDetailsTab";
import DepartureDetailsTab from "./NewTabs/DepartureDetailsTab";
import BookingDetailTab from "./NewTabs/BookingDetailTab";
// // import VesselDetails from "./ShippingAgentTabs/VesselsDetails/VesselsDetails";
// import Crews from "./ShippingAgentTabs/CrewDetails/Crews";
// // import AgentAgenda from "./ShippingAgentTabs/AgendaDetails/AgentAgenda";

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
                    Basic Information&nbsp; <i className="fa fa-home"></i>
                  </>
                }
                className="tab-pane"
              >
                <BasicInfoTab />
                {/* Basic Information */}
              </div>

              <div
                label={<> Vessel Information &nbsp; </>}
                className="tab-pane"
              >
                <VesselInfoTab />
              </div>

              <div label={<> Arrival Details &nbsp; </>} className="tab-pane">
                <ArrivalDetailsTab />
              </div>

              <div label={<> Crew Information &nbsp; </>} className="tab-pane">
                <CrewDetailsTab />
              </div>

              <div label={<> Departure Details &nbsp; </>} className="tab-pane">
                <DepartureDetailsTab />
              </div>

              <div
                label={<> Booking Information &nbsp; </>}
                className="tab-pane"
              >
                <BookingDetailTab />
              </div>
            </NavTabs>
          </div>
        </div>
      </div>
    </>
  );
});

export default ShippingAgentOptions;
