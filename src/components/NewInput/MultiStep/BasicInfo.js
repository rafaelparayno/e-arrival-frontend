import React, { useState, useEffect } from "react";
import {
  editDataDetailsModal,
  editDepartureDetailsModal,
  editArrivalDetailsModal,
} from "../../../store/action/index";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

const BasicInfo = (props) => {
  const [basicInfoEditDetails, setBasicInfoEditDetails] = useState({});
  const [exitModal, setEditExitModal] = useState(false);
  const { next } = props;

  useEffect(() => {
    props.editDataDetails && setBasicInfoEditDetails(props.editDataDetails);
  }, [props.editDataDetails]);

  const editBasicInfoHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setBasicInfoEditDetails({ ...basicInfoEditDetails, [name]: value });
  };

  const goToSecond = () => {
    props.openModal(basicInfoEditDetails);
    next();
  };

  const exitModalEvent = () => {
    props.openModal(null);
    props.setDataDeparture(null);
    props.setDataArrival(null);
    setEditExitModal(false);
  };

  return (
    <>
      {" "}
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
            display: "flex",
            justifyContent: "space-between",
          }}
          className="col-lg-12"
        >
          <button
            onClick={() => setEditExitModal(true)}
            className="btn btn-lg btn-default"
          >
            Exit
          </button>
          <button
            // disabled={
            //   !basicInfoEditDetails.vessel_name ||
            //   !basicInfoEditDetails.vessel_flag ||
            //   !basicInfoEditDetails.imotext ||
            //   !basicInfoEditDetails.DWT ||
            //   !basicInfoEditDetails.GRT ||
            //   !basicInfoEditDetails.LOA ||
            //   !basicInfoEditDetails.NRT
            // }
            onClick={(e) => goToSecond()}
            className="btn btn-lg btn-primary"
          >
            Next
          </button>
        </div>
      </div>
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Confirm"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Clearing Data"
        show={exitModal}
        onConfirm={() => exitModalEvent()}
        onCancel={() => setEditExitModal(false)}
      >
        {"Exiting this modal will clear the data."}
      </SweetAlert>
    </>
  );
};

const mapStateToProps = (state) => ({
  editDataDetails: state.multiform.editDataDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(editDataDetailsModal(data)),
    setDataArrival: (data) => dispatch(editArrivalDetailsModal(data)),
    setDataDeparture: (data) => dispatch(editDepartureDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
