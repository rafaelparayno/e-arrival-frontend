import React, { useState, useEffect } from "react";
import { editVesselDetailsModal } from "../../../store/action/index";
import { connect } from "react-redux";

const NewVesselInfo = (props) => {
  const [vesselEditDetails, setVesselEditDetails] = useState({});

  const { next, prev } = props;

  useEffect(() => {
    props.editVesselDetails && setVesselEditDetails(props.editVesselDetails);
  }, [props.editVesselDetails]);

  const editVesselDetailsHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setVesselEditDetails({ ...vesselEditDetails, [name]: value });
  };

  const goToThird = () => {
    props.setDataVessel(vesselEditDetails);
    next();
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
          <label className="font-size">Registry Flag </label>

          <div>
            <input
              className="form-control"
              name="flag_registry"
              value={vesselEditDetails.flag_registry}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Voyage Number</label>

          <div>
            <input
              className="form-control"
              name="voyage_no"
              value={vesselEditDetails.voyage_no}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-3">
          <label className="font-size"> Gross Registered Tonnage (GRT)</label>

          <div>
            <input
              className="form-control"
              name="grt"
              value={vesselEditDetails.grt}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">Deadweight Tonnage (DWT)</label>

          <div>
            <input
              className="form-control"
              name="dwt"
              value={vesselEditDetails.dwt}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">Net Registred Tonnage (NRT)</label>

          <div>
            <input
              className="form-control"
              name="nrt"
              value={vesselEditDetails.nrt}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">Length Overall (LOA)</label>

          <div>
            <input
              className="form-control"
              name="loa"
              value={vesselEditDetails.loa}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10px", marginBottom: "10px" }} className="row">
        <div className="col-lg-4">
          <label className="font-size">Breadth</label>

          <div>
            <input
              className="form-control"
              name="breadth"
              value={vesselEditDetails.breadth}
              type="number"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Name of Last Port</label>

          <div>
            <input
              className="form-control"
              name="name_last_port"
              value={vesselEditDetails.name_last_port}
              type="text"
              onChange={editVesselDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Date of Departure from Last Port:</label>

          <div>
            <input
              className="form-control"
              name="departure_last_port"
              value={vesselEditDetails.departure_last_port}
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
          <button onClick={(e) => prev()} className="btn btn-lg btn-default">
            Previous
          </button>
          <button
            disabled={
              !vesselEditDetails.vessel_name ||
              !vesselEditDetails.flag_registry ||
              !vesselEditDetails.voyage_no ||
              !vesselEditDetails.dwt ||
              !vesselEditDetails.grt ||
              !vesselEditDetails.loa ||
              !vesselEditDetails.nrt
            }
            onClick={(e) => goToThird()}
            className="btn btn-lg btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  editVesselDetails: state.vessels.editVesselDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setDataVessel: (data) => dispatch(editVesselDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewVesselInfo);
