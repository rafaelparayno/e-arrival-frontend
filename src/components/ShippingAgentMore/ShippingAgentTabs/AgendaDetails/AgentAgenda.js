import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

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
  //   CrewList: state.crew.CrewList,
  //   loadingAgentAgenda: state.crew.loadingAgentAgenda,
  //   isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // onFecthVessel: (token, data, query) =>
    //   dispatch(fetchVessel(token, data, query)),
    // onFetchAgentAgenda: (token, data, query) =>
    //   dispatch(fetchAgentAgendaList(token, data, query)),
    // openModal: (data) => dispatch(editShippingAgentDetailsModal(data)),
    // // alertConfirm: (data) => dispatch(alertShowUsers(data)),
    // // delete: (token, id) => dispatch(deleteEditDetailsUser(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentAgenda);
