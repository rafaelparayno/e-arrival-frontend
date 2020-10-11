import React, { useState, useEffect } from "react";

const ArrivalInfo = (props) => {
  const [arrivalEditDetails, setArrivalEditDetails] = useState({});
  const { next, prev } = props;
  const arrivalEditDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setArrivalEditDetails({ ...arrivalEditDetails, [name]: value });
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-4">
          <label className="font-size">Arrival Draft FWD</label>

          <div>
            <input
              className="form-control"
              name="name"
              value={arrivalEditDetails.arrival_draft}
              type="text"
              onChange={props.handler}
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
              value={arrivalEditDetails.berth_req}
              type="text"
              onChange={props.handler}
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
              value={arrivalEditDetails.imonumber}
              type="text"
              onChange={props.handler}
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
              value={arrivalEditDetails.GRT}
              type="number"
              onChange={props.handler}
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
              value={arrivalEditDetails.DWT}
              type="number"
              onChange={props.handler}
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
              value={arrivalEditDetails.NRT}
              type="number"
              onChange={props.handler}
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
              value={arrivalEditDetails.LOA}
              type="number"
              onChange={props.handler}
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
              value={arrivalEditDetails.Breadth}
              type="number"
              onChange={props.handler}
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
              value={arrivalEditDetails.GRT}
              type="number"
              onChange={props.handler}
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
          <button onClick={(e) => next()} className="btn btn-lg btn-primary">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ArrivalInfo;
