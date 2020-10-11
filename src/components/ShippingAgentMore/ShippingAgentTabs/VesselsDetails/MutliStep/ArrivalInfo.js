import React, { useState, useEffect } from "react";
import Select, { createFilter } from "react-select";
import { eo, es, enUS } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./ArrivalInfo.css";

const ArrivalInfo = (props) => {
  const [arrivalEditDetails, setArrivalEditDetails] = useState({});
  const { next, prev } = props;
  const locales = {
    "en-US": enUS,
    es: es,
    eo: eo,
    // ...
  };

  registerLocale(locales);

  const arrivalEditDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setArrivalEditDetails({ ...arrivalEditDetails, [name]: value });
  };

  const dateArrivalHandler = (date, name) => {
    setArrivalEditDetails({ ...arrivalEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setArrivalEditDetails({ ...arrivalEditDetails, ["time_arrival"]: time });
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
          <label className="font-size">Berth Requested Anchorage </label>

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
          <label className="font-size">Date Arrival Approximately:</label>
          <div className="input-group">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={arrivalEditDetails.date}
              onChange={(date) => dateArrivalHandler(date, "date")}
              locale={es}
              style={{ width: "400px" }}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-lg-3">
          <label className="font-size">Time Arrival Approximately:</label>
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
          <label className="font-size">Cargoes Discharged</label>

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
          <label className="font-size">Cargoes Loaded</label>

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

        <div className="col-lg-3">
          <label className="font-size">Purpose call</label>

          <div>
            <input
              className="form-control"
              name="purpose"
              value={arrivalEditDetails.purpose}
              type="text"
              onChange={arrivalEditDetailHandler}
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
