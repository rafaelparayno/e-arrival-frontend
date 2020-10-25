import React, { Children, useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../UI/Modal/Modal";
import axios from "axios";
import CalendarUi from "../../UI/Calendar/CalendarUi";
import { format, addHours } from "date-fns";

const SelectMonthModal = (props) => {
  const [eventsCalendar, setEventsCalendar] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const eventStyleGetter = (event, start, end, isSelected) => {
    let newStyle = {
      backgroundColor: "#292b2c",
      borderRadius: "5px",
      border: "none",
      color: "#fff",
      margin: "3px",
      height: "35px",
    };

    return {
      className: "",
      style: newStyle,
    };
  };

  // const ColoredDateCellWrapper = ({ children, value }) =>
  //   React.cloneElement(Children.only(children), {
  //     style: {
  //       ...children.style,
  //       backgroundColor: "lightgreen",
  //     },
  //   });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/bookings", {
        headers: {
          Authorization: `Bearer ${props.userToken}`,
        },
      });

      if (result.data) {
        const dataCols = result.data.map((data) => ({
          ...data,
          title: `${data.basic_info.vessel_infos[0].name} \n onFil ${data.basic_info.new_crews[0].no_fil_singin} \n offFor${data.basic_info.new_crews[0].no_for_signoff}`,
          type: data.type,
          start: new Date(`${data.date} ${data.time}`),
          end: addHours(new Date(`${data.date}  ${data.time}`), 1),
        }));

        setEventsCalendar(dataCols);
      }
    };

    fetchData();
  }, []);

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

  const selectEvent = () => {
    props.setDateDetails({ ...props.dateDetails, book_date: selectedDate });
    props.close();
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
        // modalClosed={close}
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
            eventStyle={eventStyleGetter}
            // styleComponents={ColoredDateCellWrapper}
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
          <button
            onClick={() => selectEvent()}
            className="btn btn-md btn-primary"
          >
            SELECT
          </button>
          <button onClick={() => close()} className="btn btn-md btn-danger">
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
});

export default connect(mapStateToProps, null)(SelectMonthModal);
