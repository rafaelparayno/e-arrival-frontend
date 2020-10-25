import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  saveEditDetailsVessel,
  saveEditDetailsArrival,
  saveEditDetailsBooking,
  saveEditDetailsDeparture,
} from "../../../store/action/index";
import { eo, es, enUS } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import SaveButton from "../../UI/SaveButton/SaveButton";
import SelectMonthModal from "./SelectMonthModal";
import "./ArrivalInfo.css";

const BookingInfo = (props) => {
  const [bookingEditDetails, setBookingEditDetails] = useState({});
  const [openSelectDateModal, setOpenSelectDateModal] = useState(false);

  const { prev, code } = props;

  const locales = {
    "en-US": enUS,
    es: es,
    eo: eo,
    // ...
  };

  const close = () => {
    setOpenSelectDateModal(false);
  };

  //   const {
  //     editVesselDetails: { vessel_name },
  //   } = props;

  registerLocale(locales);

  const dateArrivalHandler = (date, name) => {
    setBookingEditDetails({ ...bookingEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setBookingEditDetails({ ...bookingEditDetails, ["time"]: time });
  };

  const saveData = async () => {
    try {
      const vessels = await props.onSaveVessel(props.userToken, {
        ...props.editVesselDetails,
        shipping_agent_id: code,
      });

      await Promise.all([
        props.onSaveArrival(props.userToken, {
          ...props.editArrivalDetails,
          vessels_id: vessels.vessels_id,
        }),
        props.onSaveDeparture(props.userToken, {
          ...props.editDepartureDetails,
          vessels_id: vessels.vessels_id,
        }),
        props.onSaveBooking(props.userToken, {
          ...bookingEditDetails,
          vessels_id: vessels.vessels_id,
        }),
      ]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {" "}
      {console.log(openSelectDateModal)}
      <div className="row">
        <div className="col-lg-5">
          <label className="font-size">Vessel Name</label>

          <div>
            <input
              className="form-control"
              readOnly
              //   value={vessel_name}
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Booking Date</label>

          <div>
            <input
              className="form-control"
              readOnly
              //   value={vessel_name}
              type="text"
            />
            <button
              style={{ marginTop: "5px" }}
              className="btn btn-md btn-primary"
              onClick={() => setOpenSelectDateModal(true)}
            >
              Select Date
            </button>
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
          <SaveButton onClick={() => saveData()} />
        </div>
      </div>
      {openSelectDateModal && (
        <SelectMonthModal show={openSelectDateModal} close={close} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  editVesselDetails: state.vessels.editVesselDetails,
  editArrivalDetails: state.arrival.editArrivalDetails,
  editDepartureDetails: state.departure.editDepartureDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveVessel: (token, data) => dispatch(saveEditDetailsVessel(token, data)),
    onSaveArrival: (token, data) =>
      dispatch(saveEditDetailsArrival(token, data)),
    onSaveDeparture: (token, data) =>
      dispatch(saveEditDetailsDeparture(token, data)),
    onSaveBooking: (token, data) =>
      dispatch(saveEditDetailsBooking(token, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingInfo);
