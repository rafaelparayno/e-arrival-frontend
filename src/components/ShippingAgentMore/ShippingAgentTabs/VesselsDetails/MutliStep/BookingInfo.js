import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { eo, es, enUS } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import SaveButton from "../../../../UI/SaveButton/SaveButton";
import "./ArrivalInfo.css";

const BookingInfo = (props) => {
  const [bookingEditDetails, setBookingEditDetails] = useState({});
  const { next, prev } = props;
  const locales = {
    "en-US": enUS,
    es: es,
    eo: eo,
    // ...
  };

  const {
    editVesselDetails: { name },
  } = props;

  registerLocale(locales);

  const dateArrivalHandler = (date, name) => {
    setBookingEditDetails({ ...bookingEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setBookingEditDetails({ ...bookingEditDetails, ["time"]: time });
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-7">
          <label className="font-size">Vessel Name</label>

          <div>
            <input
              className="form-control"
              readOnly
              value={name}
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-3">
          <label className="font-size">Booking Date :</label>
          <div className="input-group">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={bookingEditDetails.date}
              onChange={(date) => dateArrivalHandler(date, "date")}
              locale={es}
              style={{ width: "400px" }}
              className="form-control"
            />
          </div>
        </div>

        <div className="col-lg-2">
          <label className="font-size">Time Booking:</label>
          <div className="input-group">
            <TimePicker
              onChange={timeArrivalHandler}
              clockIcon={null}
              value={bookingEditDetails.time}
              style={{ width: "100%", fontSize: "1.5rem" }}
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
          <SaveButton />
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
    // openModal: (data) => dispatch(editVesselDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);
