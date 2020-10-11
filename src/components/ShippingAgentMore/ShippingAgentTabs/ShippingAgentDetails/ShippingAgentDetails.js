import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./ShippingAgentDetails.module.css";

const ShippingAgentDetails = (props) => {
  const [shippingAgentDetailShow, editShippingAgentDetailShow] = useState("");

  useEffect(() => {
    const access_token = props.userToken;
    const { code } = props;
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/agents/${code}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        editShippingAgentDetailShow(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {console.log(shippingAgentDetailShow.id)},
      <div className="well well-light">
        <div className={classes.addressPrimaryInfo}>
          <div className="">
            <div className="address-code">
              ID:{" "}
              <strong className="address-code-data">
                {" "}
                {shippingAgentDetailShow.id}
              </strong>
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Shipping Agent Name :
                <strong className="address-code-data">
                  {" "}
                  {shippingAgentDetailShow.shipping_agent_name}
                </strong>
              </span>{" "}
            </div>

            <div className="company-name margin-top-5">
              <span className="company-name"> Company Address :</span>{" "}
            </div>

            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Email :
                <strong className="address-code-data">
                  {" "}
                  {shippingAgentDetailShow.e_add &&
                    shippingAgentDetailShow.e_add}
                </strong>
              </span>{" "}
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Website :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.website && props.details.website} */}
                </strong>
              </span>{" "}
            </div>
            <div className="company-name margin-bottom-5">
              <span className="company-name">
                {" "}
                Contact No :
                <strong className="address-code-data">
                  {" "}
                  {shippingAgentDetailShow.contact_no}
                </strong>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
});

export default connect(mapStateToProps, null)(ShippingAgentDetails);
