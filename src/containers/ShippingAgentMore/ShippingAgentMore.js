import React from "react";
import ShippingAgentDetails from "../../components/ShippingAgentMore/ShippingAgentTabs/ShippingAgentDetails/ShippingAgentDetails";
import ShippingAgentOptions from "../../components/ShippingAgentMore/ShippingAgentOptions";

const ShippingAgentMore = (props) => {
  const code = props.match.params.id;
  return (
    <div id="content">
      <div className="clearfix">
        {/* <div className="col-lg-4">
          <ShippingAgentDetails code={code} />
        </div> */}
        &nbsp;
        <div
          style={{
            minHeight: "500px",
          }}
          className="col-lg-12"
        >
          <ShippingAgentOptions code={code} />
        </div>
      </div>
    </div>
  );
};

export default ShippingAgentMore;
