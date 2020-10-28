import React, { useState, useEffect } from "react";
import Select, { createFilter } from "react-select";
import { editCrewDetailsModal } from "../../../store/action/index";
import { connect } from "react-redux";

const NewCrewNameDetails = (props) => {
  const [crewNameFilSignin, setCrewNameFilSignIn] = useState([]);
  const [crewNameForSignin, setCrewNameForSignIn] = useState([]);
  //   const [crewEditDetails, setCrewEditDetails] = useState({});
  const crewNameFilSigninInput = [];
  const crewForeignSinginInput = [];
  const { next, prev } = props;

  const handlerSigninFil = (e, i) => {
    let values = [...crewNameFilSignin];
    values[i] = e.target.value;

    setCrewNameFilSignIn(values);
  };

  const handlerSigninFor = (e, i) => {
    let values = [...crewNameFilSignin];
    values[i] = e.target.value;

    setCrewNameForSignIn(values);
  };

  for (let i = 0; i < props.editCrewDetails.no_fil_singin; i++) {
    crewNameFilSigninInput.push(
      <div key={i} className="col-lg-4">
        <label className="font-size">{i + 1}. Name</label>

        <div>
          <input
            className="form-control"
            value={crewNameFilSignin[i]}
            type="text"
            onChange={(e) => handlerSigninFil(e, i)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  }

  for (let i = 0; i < props.editCrewDetails.no_for_singin; i++) {
    crewForeignSinginInput.push(
      <div key={i} className="col-lg-4">
        <label className="font-size">{i + 1}. Name</label>

        <div>
          <input
            className="form-control"
            value={crewNameForSignin[i]}
            type="text"
            onChange={(e) => handlerSigninFor(e, i)}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    );
  }

  //   const selectChangeHandlder = (e, name) => {
  //     setCrewEditDetails({ ...crewEditDetails, [name]: e });
  //   };

  //   useEffect(() => {
  //     props.editCrewDetails && setCrewEditDetails(props.editCrewDetails);
  //   }, [props.editCrewDetails]);

  const goToSecond = () => {
    // props.setCrewDetails(crewEditDetails);
    next();
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3>Names of Filipino Signing In</h3>
        </div>
      </div>
      <div className="row">{crewNameFilSigninInput}</div>
      <div className="row">
        <div className="col-lg-6">
          <h3>Names of Foreign Signing In</h3>
        </div>
      </div>
      <div className="row">{crewForeignSinginInput}</div>
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
          <button
            onClick={(e) => goToSecond()}
            className="btn btn-lg btn-primary"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  editCrewDetails: state.crew.editCrewDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // setCrewDetails: (data) => dispatch(editCrewDetailsModal(data)),
    // setDataArrival: (data) => dispatch(editArrivalDetailsModal(data)),
    // setDataDeparture: (data) => dispatch(editDepartureDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCrewNameDetails);
