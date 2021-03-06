import React, { useState, useEffect } from "react";
import { editArrivalDetailsModal } from "../../../store/action/index";
import { connect } from "react-redux";

import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import Select, { createFilter } from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "./ArrivalInfo.css";

const NewArrivalInfo = (props) => {
  const [arrivalEditDetails, setArrivalEditDetails] = useState({});
  const { next, prev } = props;

  const purposeCallData = [
    {
      label: "DISCHARGING",
      value: "DISCHARGING",
    },
    {
      label: "LOADING",
      value: "LOADING",
    },
    {
      label: "CREW CHANGE",
      value: "CREW CHANGE",
    },
    {
      label: "DISCHARGING AND CREW CHANGE",
      value: "DISCHARGING AND CREW CHANGE",
    },
    {
      label: "LOADING AND CREW CHANGE",
      value: "LOADING AND CREW CHANGE",
    },
    {
      label: "DISCHARGING,LOADING, AND CREW CHANGE",
      value: "DISCHARGING,LOADING, AND CREW CHANGE",
    },
    {
      label: "OTHERS",
      value: "OTHERS",
    },
  ];

  useEffect(() => {
    props.editArrivalDetails && setArrivalEditDetails(props.editArrivalDetails);
  }, [props.editArrivalDetails]);

  const goToThird = () => {
    props.getData(arrivalEditDetails);
    next();
  };

  const arrivalEditDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setArrivalEditDetails({ ...arrivalEditDetails, [name]: value });
  };

  const dateArrivalHandler = (date, name) => {
    setArrivalEditDetails({ ...arrivalEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setArrivalEditDetails({ ...arrivalEditDetails, ["time"]: time });
  };

  const selectChangeHandlder = (e, name) => {
    setArrivalEditDetails({ ...arrivalEditDetails, [name]: e });
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-3">
          <label className="font-size">Arrival Draft FWD</label>

          <div>
            <input
              className="form-control"
              name="draft"
              value={arrivalEditDetails.draft}
              type="text"
              onChange={arrivalEditDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Berth
            Requested Anchorage{" "}
          </label>

          <div>
            <input
              className="form-control"
              name="berth"
              value={arrivalEditDetails.berth}
              type="text"
              onChange={arrivalEditDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Date
            Arrival Approximately:
          </label>
          <div className="input-group">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={arrivalEditDetails.date}
              onChange={(date) => dateArrivalHandler(date, "date")}
              style={{ width: "400px" }}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-lg-3">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Time
            Arrival Approximately:
          </label>
          <div className="input-group">
            <TimePicker
              onChange={timeArrivalHandler}
              clockIcon={null}
              value={arrivalEditDetails.time}
              style={{ width: "100%", fontSize: "1.5rem" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-6">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Cargoes
            Discharged
          </label>

          <div>
            <input
              className="form-control"
              name="discharged"
              value={arrivalEditDetails.discharged}
              type="number"
              onChange={arrivalEditDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Cargoes
            Loaded
          </label>

          <div>
            <input
              className="form-control"
              name="loaded"
              value={arrivalEditDetails.loaded}
              type="number"
              onChange={arrivalEditDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "10px", marginTop: "10px" }} className="row">
        <div className="col-lg-6">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Volume
          </label>

          <div>
            <input
              className="form-control"
              name="volume"
              value={arrivalEditDetails.volume}
              type="number"
              onChange={arrivalEditDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <label className="font-size">
            <span style={{ color: "red", fontSize: "1.25em" }}>*</span> Purpose
            of Call
          </label>

          <div style={{ width: "100%" }}>
            <Select
              filterOption={createFilter({ ignoreAccents: false })}
              options={purposeCallData}
              value={arrivalEditDetails.purpose_call}
              onChange={(event) => selectChangeHandlder(event, "purpose_call")}
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
          <button onClick={() => prev()} className="btn btn-lg btn-default">
            Previous
          </button>
          <button
            disabled={
              !arrivalEditDetails.date ||
              !arrivalEditDetails.time ||
              !arrivalEditDetails.draft ||
              !arrivalEditDetails.berth ||
              !arrivalEditDetails.discharged ||
              !arrivalEditDetails.purpose_call ||
              !arrivalEditDetails.loaded
            }
            onClick={() => goToThird()}
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
  editArrivalDetails: state.arrival.editArrivalDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(editArrivalDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivalInfo);
