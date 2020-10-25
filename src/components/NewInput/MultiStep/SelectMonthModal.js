import React, { useState, useEffect } from "react";
import Modal from "../../UI/Modal/Modal";
import CalendarUi from "../../UI/Calendar/CalendarUi";
import SweetAlert from "react-bootstrap-sweetalert";
import { format } from "date-fns";

const SelectMonthModal = (props) => {
  const [eventsCalendar, setEventsCalendar] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const { close } = props;

  const newEvent = (event, action = "click") => {
    if (action === "click") {
      // const selected = {
      //   due_date: event.end,
      // };
      const selectedFormat = format(new Date(event.end), "MM/dd/yyyy");
      setSelectedDate(selectedFormat);
    }
  };
  return (
    <>
      <Modal
        title={
          <span>
            <i className="fa fa-plus-square"></i>&nbsp;Select Date
          </span>
        }
        show={props.show}
        modalClosed={close}
      >
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
            overflow: "auto",

            height: "50vh",
          }}
          className="row"
        >
          <CalendarUi
            views={["month", "week"]}
            eventCalendar={eventsCalendar}
            newEvent={newEvent}
            //  eventStyle={eventStyleGetter}
          />
        </div>

        <div style={{ display: "flex" }}>
          <input
            className="form-control"
            name="nrt"
            value={selectedDate}
            type="text"
            readOnly
            style={{ width: "100%" }}
          />
          <button className="btn btn-md btn-primary">SELECT</button>
        </div>
      </Modal>
    </>
  );
};

export default SelectMonthModal;
