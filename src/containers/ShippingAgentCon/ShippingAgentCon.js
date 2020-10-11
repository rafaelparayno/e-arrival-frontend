import React from "react";
import ShippingAgent from "../../components/ShippingAgent/ShippingAgent";

const ShippingAgentCon = React.memo((props) => {
  return (
    <main>
      <ShippingAgent />
    </main>
  );
});

export default ShippingAgentCon;
