import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const ShippingAgentDetails = (props) => {
  const [shippingAgentDetailShow, editShippingAgentDetailShow] = useState("");

  useEffect(async () => {
    const code = props.code;
    const access_token = props.userToken;
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
  }, []);

  return (
    <>
      <div className="well well-light">
        <div className={classes.addressPrimaryInfo}>
          <div className="">
            <div className="address-code">
              shippingAgentDetailShow.id:{" "}
              <strong className="address-code-data">
                {" "}
                {props.details.code}
              </strong>
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Company Name :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.company_name} */}
                </strong>
              </span>{" "}
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Company Nature :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.cmp_nature && props.details.cmp_nature} */}
                </strong>
              </span>{" "}
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name"> Company Address :</span>{" "}
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Phone :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.phones} */}
                </strong>
              </span>{" "}
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Fax :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.faxes} */}
                </strong>
              </span>{" "}
            </div>
            <div className="company-name margin-top-5">
              <span className="company-name">
                {" "}
                Email :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.emails && props.details.emails} */}
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
                Notes :
                <strong className="address-code-data">
                  {" "}
                  {/* {props.details.notes && props.details.notes} */}
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
