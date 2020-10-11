import React, { useState, useEffect } from "react";

const VesselInfo = (props) => {
  const [vesselEditDetails, setVesselEditDetails] = useState({});
  const { next } = props;

  const editVesselDetailsHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setVesselEditDetails({ ...vesselEditDetails, [name]: value });
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-4">
          <label className="font-size">Vessl Name</label>

          <div>
            <input
              className="form-control"
              name="name"
              value={vesselEditDetails.name}
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
              name="e_add"
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
              name="contact_person"
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
              name="contact_no"
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
              name="contact_no"
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
              name="contact_no"
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
              name="contact_no"
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
              name="contact_no"
              value={vesselEditDetails.Breadth}
              type="number"
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
              name="contact_no"
              value={vesselEditDetails.GRT}
              type="number"
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
            justifyContent: "flex-end",
          }}
          className="col-lg-12"
        >
          <button onClick={(e) => next()} className="btn btn-lg btn-primary">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default VesselInfo;
