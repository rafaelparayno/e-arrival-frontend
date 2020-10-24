import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  auth,
  fetchArrival,
  fetchBooking,
  fetchDeparture,
} from "../../../../store/action/index";
import CalendarUi from "../../../UI/Calendar/CalendarUi";
// import Spinner from "../../../UI/Spinner/Spinner";
// import Pagination from "../../../UI/Pagination/Pagination";
// import SweetAlert from "react-bootstrap-sweetalert";

import classes from "./AgentAgenda.module.css";

const AgentAgenda = React.memo((props) => {
  const [eventsCalendar, setEventsCalendar] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const eventStyleGetter = (event, start, end, isSelected) => {
    let newStyle = {
      backgroundColor: "#292b2c",
      borderRadius: "5px",
      border: "none",
      color: "#fff",
      margin: "3px",
      height: "25px",
    };

    if (event.type === "Arrival") {
      newStyle.backgroundColor = "#00A8E2";
    }

    if (event.type === "Booking") {
      newStyle.backgroundColor = "#D7B600";
    }

    if (event.type === "Departure") {
      newStyle.backgroundColor = "#49B1A4";
    }

    return {
      className: "",
      style: newStyle,
    };
  };

  useEffect(() => {
    async function loadData() {
      const code = props.code;
      const departureData =
        filterType === "all" || filterType === "Departure"
          ? await props.onFetchDp(props.userToken, code)
          : [];
      const arrivalData =
        filterType === "all" || filterType === "Arrival"
          ? await props.onFetchAr(props.userToken, code)
          : [];
      const bookingData =
        filterType === "all" || filterType === "Booking"
          ? await props.onFetchBp(props.userToken, code)
          : [];

      const newArrivalData = await Promise.all(
        arrivalData.map(
          ({
            berth,
            discharged,
            purpose,
            vessel_id,
            draft,
            loaded,
            ...items
          }) => ({ ...items, type: "Arrival" })
        )
      );

      const newDepartureData = await Promise.all(
        departureData.map(({ vessel_id, portcall, ...items }) => ({
          ...items,
          type: "Departure",
        }))
      );

      const newBookingData = await Promise.all(
        bookingData.map(({ vessel_id, ...items }) => ({
          ...items,
          type: "Booking",
        }))
      );

      const withTitleArrival = newArrivalData.map((data) => ({
        title: `${data.type} : ${data.vessel.name}`,
        type: data.type,
        start: new Date(`${data.date} ${data.time}`),
        end: new Date(`${data.date} ${data.time}`),
      }));

      const withTitleDeparture = newDepartureData.map((data) => ({
        title: `${data.type} : ${data.vessel.name}`,
        type: data.type,
        start: new Date(`${data.date} ${data.time}`),
        end: new Date(`${data.date} ${data.time}`),
      }));

      const withTitleBooking = newBookingData.map((data) => ({
        title: `${data.type} : ${data.vessel.name}`,
        type: data.type,
        start: new Date(`${data.date} ${data.time}`),
        end: new Date(`${data.date} ${data.time}`),
      }));

      setEventsCalendar([
        ...withTitleArrival,
        ...withTitleDeparture,
        ...withTitleBooking,
      ]);
    }
    loadData();
  }, [filterType]);

  return (
    <>
      <div className={classes.AgentAgenda}>
        &nbsp;
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <h3 style={{ marginRight: "10px" }}>Filter:</h3>
          <button
            style={{ marginRight: "10px" }}
            className="btn btn-primary btn-md"
            onClick={() => setFilterType("all")}
          >
            {" "}
            Show All{" "}
          </button>

          <button
            style={{
              marginRight: "10px",
              background: "#00A8E2",
              color: "white",
            }}
            className="btn btn-md"
            onClick={() => setFilterType("Arrival")}
          >
            {" "}
            Show Arrival{" "}
          </button>

          <button
            style={{
              marginRight: "10px",
              background: "#D7B600",
              color: "white",
            }}
            onClick={() => setFilterType("Booking")}
            className="btn btn-md"
          >
            {" "}
            Show Bookings{" "}
          </button>

          <button
            style={{
              marginRight: "10px",
              background: "#49B1A4",
              color: "white",
            }}
            className="btn btn-md"
            onClick={() => setFilterType("Departure")}
          >
            {" "}
            Show Departure{" "}
          </button>
        </header>
      </div>
      &nbsp;
      <div
        style={{
          margin: "10px 5px",
          padding: "0px 5px",
          overflowX: "auto",
          height: "74vh",
        }}
        className="row"
      >
        <CalendarUi
          views={["month", "week"]}
          eventCalendar={eventsCalendar}
          eventStyle={eventStyleGetter}
        />
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  BookingList: state.booking.BookingList,
  ArrivalList: state.arrival.ArrivalList,
  DepartureList: state.departure.DepartureList,

  //   CrewList: state.crew.CrewList,
  //   loadingAgentAgenda: state.crew.loadingAgentAgenda,
  //   isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAr: (token, auth) => dispatch(fetchArrival(token, auth)),
    onFetchDp: (token, auth) => dispatch(fetchDeparture(token, auth)),
    onFetchBp: (token, auth) => dispatch(fetchBooking(token, auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentAgenda);
