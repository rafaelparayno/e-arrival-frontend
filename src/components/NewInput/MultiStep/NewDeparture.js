import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editDepartureDetailsModal } from "../../../store/action/index";
import { eo, es, enUS } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./ArrivalInfo.css";

const Departure = (props) => {
  const [departureEditDetails, setDepartureEditDetails] = useState({});
  const { next, prev } = props;
  const locales = {
    "en-US": enUS,
    es: es,
    eo: eo,
    // ...
  };

  useEffect(() => {
    props.editDepartureDetails &&
      setDepartureEditDetails(props.editDepartureDetails);
  }, [props.editDepartureDetails]);

  registerLocale(locales);

  const departureEditDetailsHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setDepartureEditDetails({ ...departureEditDetails, [name]: value });
  };

  const dateArrivalHandler = (date, name) => {
    setDepartureEditDetails({ ...departureEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setDepartureEditDetails({ ...departureEditDetails, ["time"]: time });
  };

  const goToFourth = () => {
    props.getData(departureEditDetails);
    next();
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-3">
          <label className="font-size">Departure Date :</label>
          <div className="input-group">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={departureEditDetails.date}
              onChange={(date) => dateArrivalHandler(date, "date")}
              locale={es}
              style={{ width: "400px" }}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-lg-2">
          <label className="font-size">Time Departure:</label>
          <div className="input-group">
            <TimePicker
              onChange={timeArrivalHandler}
              clockIcon={null}
              value={departureEditDetails.time}
              style={{ width: "100%", fontSize: "1.5rem" }}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <label className="font-size">Port of call</label>

          <div>
            <input
              className="form-control"
              name="portcall"
              value={departureEditDetails.portcall}
              type="text"
              onChange={departureEditDetailsHandler}
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
            onClick={(e) => goToFourth()}
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
  editDepartureDetails: state.departure.editDepartureDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => dispatch(editDepartureDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Departure);
