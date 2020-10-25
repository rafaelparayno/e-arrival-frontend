import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  saveEditDetailsVessel,
  saveEditDetailsArrival,
  saveEditDetailsBooking,
  saveEditDetailsDeparture,
  saveEditBasicDetail,
  saveEditDetailsCrew,
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

  const {
    editVesselDetails: { vessel_name },
  } = props;

  registerLocale(locales);

  const timeArrivalHandler = (time) => {
    setBookingEditDetails({ ...bookingEditDetails, ["time"]: time });
  };

  const saveData = async () => {
    try {
      const basicDetail = await props.onSaveBasic(props.userToken, {
        ...props.editDataDetails,
      });

      await Promise.all([
        props.onSaveArrival(props.userToken, {
          ...props.editArrivalDetails,
          basic_info_id: basicDetail.id,
          purpose: props.editArrivalDetails.purpose_call.value,
        }),
        props.onSaveDeparture(props.userToken, {
          ...props.editDepartureDetails,
          basic_info_id: basicDetail.id,
        }),
        props.onSaveBooking(props.userToken, {
          ...bookingEditDetails,
          basic_info_id: basicDetail.id,
          date: bookingEditDetails.book_date,
        }),
        props.onSaveVessel(props.userToken, {
          ...props.editVesselDetails,
          basic_info_id: basicDetail.id,
        }),
        props.onSaveCrew(props.userToken, {
          ...props.editCrewDetails,
          basic_info_id: basicDetail.id,
        }),
      ]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {" "}
      <div className="row">
        <div className="col-lg-5">
          <label className="font-size">Vessel Name</label>

          <div>
            <input
              className="form-control"
              readOnly
              value={vessel_name}
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
              value={bookingEditDetails.book_date}
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
              disableClock={true}
              hourPlaceholder={"hh"}
              minutePlaceholder={"mm"}
              maxDetail={"minute"}
              minTime={"8:00:00"}
              required={true}
              maxTime={"16:00:00"}
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
          <SaveButton
            disabled={!bookingEditDetails.book_date || !bookingEditDetails.time}
            onClick={() => saveData()}
          />
        </div>
      </div>
      {openSelectDateModal && (
        <SelectMonthModal
          dateDetails={bookingEditDetails}
          setDateDetails={setBookingEditDetails}
          show={openSelectDateModal}
          close={close}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  editDataDetails: state.multiform.editDataDetails,
  editVesselDetails: state.vessels.editVesselDetails,
  editArrivalDetails: state.arrival.editArrivalDetails,
  editDepartureDetails: state.departure.editDepartureDetails,
  editCrewDetails: state.crew.editCrewDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveBasic: (token, data) => dispatch(saveEditBasicDetail(token, data)),
    onSaveCrew: (token, data) => dispatch(saveEditDetailsCrew(token, data)),
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
