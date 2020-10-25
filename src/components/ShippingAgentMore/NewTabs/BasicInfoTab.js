import React, { useState, useEffect } from "react";
// import {
//   editDataDetailsModal,
//   editDepartureDetailsModal,
//   editArrivalDetailsModal,
// } from "../../../store/action/index";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

const BasicInfoTab = (props) => {
  const [basicInfoEditDetails, setBasicInfoEditDetails] = useState({});

  //   useEffect(() => {
  //     props.editDataDetails && setBasicInfoEditDetails(props.editDataDetails);
  //   }, [props.editDataDetails]);

  const editBasicInfoHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setBasicInfoEditDetails({ ...basicInfoEditDetails, [name]: value });
  };

  return (
    <>
      {" "}
      <div
        style={{
          marginTop: "50px",
        }}
        className="container"
      >
        <div className="row">
          <div className="col-lg-4">
            <label className="font-size">Shipping License No</label>

            <div>
              <input
                className="form-control"
                name="shipping_license_no"
                value={basicInfoEditDetails.shipping_license_no}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Contact Person</label>

            <div>
              <input
                className="form-control"
                name="contact_person"
                value={basicInfoEditDetails.contact_person}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Contact Number</label>

            <div>
              <input
                className="form-control"
                name="cno"
                value={basicInfoEditDetails.cno}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-3">
            <label className="font-size">Quarantine Facility</label>

            <div>
              <input
                className="form-control"
                name="quaratine_facility"
                value={basicInfoEditDetails.quaratine_facility}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <label className="font-size">Quarantine Address</label>

            <div>
              <input
                className="form-control"
                name="quaratine_address"
                value={basicInfoEditDetails.quaratine_address}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <label className="font-size">Quarantine Contact Number</label>

            <div>
              <input
                className="form-control"
                name="quaratine_cno"
                value={basicInfoEditDetails.quaratine_cno}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <label className="font-size">Call Sign</label>

            <div>
              <input
                className="form-control"
                name="callsign"
                value={basicInfoEditDetails.callsign}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-6">
            <label className="font-size">Shipping Agency Name</label>

            <div>
              <input
                className="form-control"
                name="shipping_agency_name"
                value={basicInfoEditDetails.shipping_agency_name}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <label className="font-size">Crew Service Boat</label>

            <div>
              <input
                className="form-control"
                name="crew_service_boat"
                value={basicInfoEditDetails.crew_service_boat}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-4">
            <label className="font-size">Vehicle Type</label>

            <div>
              <input
                className="form-control"
                name="vehicle_type"
                value={basicInfoEditDetails.vehicle_type}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Vehicle Model</label>

            <div>
              <input
                className="form-control"
                name="vehicle_model"
                value={basicInfoEditDetails.vehicle_model}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Vehicle Plate No</label>

            <div>
              <input
                className="form-control"
                name="vehicle_plate_no"
                value={basicInfoEditDetails.vehicle_plate_no}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-4">
            <label className="font-size">Driver's Name</label>

            <div>
              <input
                className="form-control"
                name="driver_name"
                value={basicInfoEditDetails.driver_name}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Driver's Contact Number</label>

            <div>
              <input
                className="form-control"
                name="driver_cno"
                value={basicInfoEditDetails.driver_cno}
                type="text"
                onChange={editBasicInfoHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              marginTop: "10px",
            }}
            className="col-lg-12"
          >
            <button
              disabled={
                !basicInfoEditDetails.shipping_license_no ||
                !basicInfoEditDetails.contact_person ||
                !basicInfoEditDetails.quaratine_facility ||
                !basicInfoEditDetails.quaratine_address ||
                !basicInfoEditDetails.shipping_agency_name ||
                !basicInfoEditDetails.quaratine_cno ||
                !basicInfoEditDetails.shipping_agency_name ||
                !basicInfoEditDetails.callsign ||
                !basicInfoEditDetails.crew_service_boat ||
                !basicInfoEditDetails.vehicle_type
              }
              //onClick={(e) => goToSecond()}
              className="btn btn-md btn-block btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  //   editDataDetails: state.multiform.editDataDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // openModal: (data) => dispatch(editDataDetailsModal(data)),
    // setDataArrival: (data) => dispatch(editArrivalDetailsModal(data)),
    // setDataDeparture: (data) => dispatch(editDepartureDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoTab);
