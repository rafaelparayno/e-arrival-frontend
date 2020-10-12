import React, { useState, useEffect } from "react";
import {
  editVesselDetailsModal,
  editDepartureDetailsModal,
  editArrivalDetailsModal,
} from "../../../../../store/action/index";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

const VesselInfo = (props) => {
  const [vesselEditDetails, setVesselEditDetails] = useState({});
  const [exitModal, setEditExitModal] = useState(false);
  const { next } = props;

  useEffect(() => {
    props.editVesselDetails && setVesselEditDetails(props.editVesselDetails);
  }, [props.editVesselDetails]);

  const editVesselDetailsHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setVesselEditDetails({ ...vesselEditDetails, [name]: value });
  };

  const goToSecond = () => {
    props.openModal(vesselEditDetails);
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
          <label className="font-size">Vessel Name</label>

          <div>
            <input
              className="form-control"
              name="vessel_name"
              value={vesselEditDetails.vessel_name}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Vessel Flag </label>

          <div>
            <input
              className="form-control"
              name="vessel_flag"
              value={vesselEditDetails.vessel_flag}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">IMO Number</label>

          <div>
            <input
              className="form-control"
              name="imonumber"
              value={vesselEditDetails.imonumber}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-3">
          <label className="font-size">GRT</label>

          <div>
            <input
              className="form-control"
              name="GRT"
              value={vesselEditDetails.GRT}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">DWT</label>

          <div>
            <input
              className="form-control"
              name="DWT"
              value={vesselEditDetails.DWT}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">NRT</label>

          <div>
            <input
              className="form-control"
              name="NRT"
              value={vesselEditDetails.NRT}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">LOA</label>

          <div>
            <input
              className="form-control"
              name="LOA"
              value={vesselEditDetails.LOA}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "10px" }} className="row">
        <div className="col-lg-6">
          <label className="font-size">Breadth</label>

          <div>
            <input
              className="form-control"
              name="breadth"
              value={vesselEditDetails.breadth}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <label className="font-size">Call Sign</label>

          <div>
            <input
              className="form-control"
              name="callsign"
              value={vesselEditDetails.callsign}
              type="text"
              onChange={editVesselDetailsHandler}
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
            disabled={
              !vesselEditDetails.vessel_name ||
              !vesselEditDetails.vessel_flag ||
              !vesselEditDetails.imonumber
            }
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
  editVesselDetails: state.vessels.editVesselDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(editVesselDetailsModal(data)),
    setDataArrival: (data) => dispatch(editArrivalDetailsModal(data)),
    setDataDeparture: (data) => dispatch(editDepartureDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VesselInfo);
