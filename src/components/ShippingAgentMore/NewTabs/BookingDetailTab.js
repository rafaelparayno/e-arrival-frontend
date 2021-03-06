import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import SaveButton from "../../UI/SaveButton/SaveButton";
import SelectMonthModal from "../../NewInput/MultiStep/SelectMonthModal";

const BookingDetailTab = (props) => {
  const [bookingEditDetails, setBookingEditDetails] = useState({});
  const [openSelectDateModal, setOpenSelectDateModal] = useState(false);
  const { code } = props;
  const close = () => {
    setOpenSelectDateModal(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://199.241.138.64/bookings/basic/${code}`,
        {
          headers: {
            Authorization: `Bearer ${props.userToken}`,
          },
        }
      );

      result.data &&
        setBookingEditDetails({
          ...result.data,
          book_date: result.data.date,
          vesselname: result.data.basic_info.vessel_infos[0].name,
        });
    };

    fetchData();
  }, []);

  const timeArrivalHandler = (time) => {
    setBookingEditDetails({ ...bookingEditDetails, ["time"]: time });
  };

  return (
    <>
      {" "}
      <div
        style={{
          marginTop: "50px",
          height: "90vh",
        }}
        className="container"
      >
        <div className="row">
          <div className="col-lg-5">
            <label className="font-size">Vessel Name</label>

            <div>
              <input
                className="form-control"
                readOnly
                value={bookingEditDetails.vesselname}
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
            }}
            className="col-lg-12"
          >
            <SaveButton
              className="btn btn-md btn-block btn-primary"
              disabled={
                !bookingEditDetails.book_date || !bookingEditDetails.time
              }
              //    onClick={() => saveData()}
            />
          </div>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetailTab);
