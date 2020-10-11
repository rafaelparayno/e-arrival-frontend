import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "../../../UI/Spinner/Spinner";
import Pagination from "../../../UI/Pagination/Pagination";
import SweetAlert from "react-bootstrap-sweetalert";

import Crew from "./Crew";
import classes from "./Crews.module.css";

const Crews = React.memo((props) => {
  // const [crews, EditCrews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4);
  // const { crewsListState } = props.CrewList;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = props.CrewList.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useEffect(() => {
  //   crewsListState && EditCrews(crewsListState);
  // }, [crewsListState]);

  return (
    <>
      <div className={classes.Crews}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>Crew Mates</h3>
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
        </div>
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
            overflowX: "auto",
            height: "20vh",
          }}
          className="row"
        >
          {props.loadingCrews ? (
            <Spinner />
          ) : (
            currentRows.map((crew) => <Crew key={crew.id} details={crew} />)
          )}
        </div>
        <div style={{ zIndex: 0, background: "#f0f0f0" }}>
          <Pagination
            rowsPerPage={rowsPerPage}
            total={props.CrewList.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  CrewList: state.crew.CrewList,
  loadingCrews: state.crew.loadingCrews,
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
