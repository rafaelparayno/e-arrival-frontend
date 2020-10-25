import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  editCrewDetailsModal,
  fetchCrewList,
  alertShowCrews,
} from "../../../../store/action/index";
import Spinner from "../../../UI/Spinner/Spinner";
import Pagination from "../../../UI/Pagination/Pagination";
import SweetAlert from "react-bootstrap-sweetalert";
import CrewModal from "./CrewModal";

import Crew from "./Crew";
import classes from "./Crews.module.css";

const Crews = React.memo((props) => {
  // const [crews, EditCrews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4);
  // const { crewsListState } = props.CrewList;
  useEffect(() => {
    // selectedRows && props.onFetchCrew(props.userToken, selectedRows.vessels_id);
    props.selectedVessel &&
      props.onFetchCrew(props.userToken, props.selectedVessel.vessels_id);
  }, [props.selectedVessel]);

  useEffect(() => {
    props.selectedVessel &&
      props.onFetchCrew(props.userToken, props.selectedVessel.vessels_id);
  }, [props.isSuccess]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = props.CrewList.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const closeModal = () => {
    props.openModal(null);
  };

  const closeSuccess = () => {
    props.alertConfirm(false);
  };

  return (
    <>
      <div className={classes.Crews}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>Crew Mates</h3>
        </header>
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
            overflowX: "auto",
            height: "20vh",
          }}
          className="row"
        ></div>
      </div>

      {/* {props.editCrewDetails && (
        <CrewModal
          vesselsid={props.selectedVessel.vessels_id}
          show={props.editCrewDetails ? true : false}
          close={closeModal}
        />
      )} */}

      <SweetAlert
        success
        title="Success!"
        show={props.isSuccess}
        onConfirm={closeSuccess}
      >
        {"Success Updating Data"}
      </SweetAlert>
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  CrewList: state.crew.CrewList,
  loadingCrews: state.crew.loadingCrews,
  editCrewDetails: state.crew.editCrewDetails,
  selectedVessel: state.vessels.selectedVessel,
  isSuccess: state.crew.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // onFecthVessel: (token, data, query) =>
    //   dispatch(fetchVessel(token, data, query)),
    // onFetchCrews: (token, data, query) =>
    //   dispatch(fetchCrewsList(token, data, query)),
    openModal: (data) => dispatch(editCrewDetailsModal(data)),
    onFetchCrew: (token, data, query) =>
      dispatch(fetchCrewList(token, data, query)),
    alertConfirm: (data) => dispatch(alertShowCrews(data)),
    // // delete: (token, id) => dispatch(deleteEditDetailsUser(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crews);
