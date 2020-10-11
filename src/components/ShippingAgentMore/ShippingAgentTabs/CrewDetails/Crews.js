import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// import {
//   fetchVessel,
//   editCrewsModal,
//   deleteEditDetailsVessel,
//   alertShowVessels,
//   fetchCrewsList,
// } from "../../../../store/action/index";

import Spinner from "../../../UI/Spinner/Spinner";
import Table from "../../../UI/Table/Table";
import SweetAlert from "react-bootstrap-sweetalert";
import classes from "./Crews.module.css";

const Crews = React.memo((props) => {
  const [crews, EditCrews] = useState({});
  const { crewsListState } = props.CrewList;

  useEffect(() => {
    crewsListState && EditCrews(crewsListState);
  }, [crewsListState]);

  return (
    <>
      <div className={classes.Crews}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>Vessel</h3>
        </header>
        <div className={classes.searchBar}>
          <div className={classes.Input}>
            <label className={classes.Label}>Search:</label>
            <input
              placeholder="Type here...."
              className={classes.InputElement}
              name="searchKey"
              // value={searchHeader.searchKey}
              // onChange={editSearchHeaderHandler}
              style={{ width: "100%" }}
              type="text"
            />
          </div>
          <button
            // onClick={(e) => searchQuery(e)}
            className={classes.btn}
          >
            <i className="fa fa-search"></i>
          </button>

          <button
            // onClick={() => props.openModal({})}
            className={classes.btnAdd}
          >
            <i className="fa fa-plus"></i>&nbsp; New Vessel Arriving
          </button>
        </div>
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
            overflowX: "auto",
            height: "70vh",
          }}
          className="row"
        ></div>
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  CrewList: state.crew.CrewList,
  //   isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // onFecthVessel: (token, data, query) =>
    //   dispatch(fetchVessel(token, data, query)),
    // onFetchCrews: (token, data, query) =>
    //   dispatch(fetchCrewsList(token, data, query)),
    // openModal: (data) => dispatch(editShippingAgentDetailsModal(data)),
    // // alertConfirm: (data) => dispatch(alertShowUsers(data)),
    // // delete: (token, id) => dispatch(deleteEditDetailsUser(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crews);
