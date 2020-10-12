import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchArrival, fetchDeparture } from "../../../../store/action/index";
import CalendarUi from "../../../UI/Calendar/CalendarUi";
import Spinner from "../../../UI/Spinner/Spinner";
// import Pagination from "../../../UI/Pagination/Pagination";
// import SweetAlert from "react-bootstrap-sweetalert";

import classes from "./AgentAgenda.module.css";

const AgentAgenda = React.memo((props) => {
  const [eventsCalendar, setEventsCalendar] = useState([]);

  // const eventStyleGetter = (event, start, end, isSelected) => {
  //     let newStyle = {
  //       backgroundColor: event.backgroundColor,
  //       borderRadius: "5px",
  //       border: `1px solid ${event.borderColor}`,
  //       color: "#fff",
  //       margin: "3px",
  //     };

  //     return {
  //       className: "",
  //       style: newStyle,
  //     };
  //   };

  useEffect(() => {
    async function loadData() {
      const code = props.code;

      await Promise.all([
        props.onFetchAr(props.userToken, code),
        props.onFetchDp(props.userToken, code),
      ]);
    }

    loadData();
  }, []);

  return (
    <>
      <div className={classes.AgentAgenda}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>Calendar</h3>
        </header>

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
            eventCalendar={eventsCalendar}
            // eventStyle={eventStyleGetter}
          />
        </div>
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  //   CrewList: state.crew.CrewList,
  //   loadingAgentAgenda: state.crew.loadingAgentAgenda,
  //   isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchAr: (token, auth) => dispatch(fetchArrival(token, auth)),
    onFetchDp: (token, auth) => dispatch(fetchDeparture(token, auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentAgenda);
