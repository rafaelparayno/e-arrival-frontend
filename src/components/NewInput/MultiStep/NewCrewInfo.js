import React, { useState, useEffect } from "react";
import Select, { createFilter } from "react-select";
// import {

//   editDepartureDetailsModal,
//   editArrivalDetailsModal,
// } from "../../../store/action/index";
import { connect } from "react-redux";

const NewVesselInfo = (props) => {
  const [crewEditDetails, setCrewEditDetails] = useState({});

  const { next, prev } = props;

  const yesAndNoForm = [
    {
      label: "YES",
      value: "YES",
    },
    {
      label: "NO",
      value: "NO",
    },
  ];

  const selectChangeHandlder = (e, name) => {
    setCrewEditDetails({ ...crewEditDetails, [name]: e });
  };

  //   useEffect(() => {
  //     props.editCrewDetails && setCrewEditDetails(props.editCrewDetails);
  //   }, [props.editCrewDetails]);

  const editCrewDetailsHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setCrewEditDetails({ ...crewEditDetails, [name]: value });
  };

  const goToSecond = () => {
    next();
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <label className="font-size"> Name Master</label>

          <div>
            <input
              className="form-control"
              name="name_master"
              value={crewEditDetails.name_master}
              type="text"
              onChange={editCrewDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Number Filipino Crew</label>

          <div>
            <input
              className="form-control"
              name="no_fil_crews"
              value={crewEditDetails.no_fil_crews}
              type="number"
              onChange={editCrewDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Number of Foregin Crews</label>

          <div>
            <input
              className="form-control"
              name="no_for_crews"
              value={crewEditDetails.no_for_crews}
              type="number"
              onChange={editCrewDetailsHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-6">
          <label className="font-size">Are there Crews Signing in?</label>

          <div style={{ width: "100%" }}>
            <Select
              filterOption={createFilter({ ignoreAccents: false })}
              options={yesAndNoForm}
              value={crewEditDetails.crews_signingin}
              onChange={(event) =>
                selectChangeHandlder(event, "crews_signingin")
              }
            />
          </div>
        </div>
        {crewEditDetails.crews_signingin &&
          crewEditDetails.crews_signingin.value === "YES" && (
            <>
              <div className="col-lg-3">
                <label className="font-size">
                  Number of Filipino Crew Signing in
                </label>

                <div>
                  <input
                    className="form-control"
                    name="dwt"
                    value={crewEditDetails.dwt}
                    type="number"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <label className="font-size">
                  Number of Foreign Crew Signing in
                </label>

                <div>
                  <input
                    className="form-control"
                    name="nrt"
                    value={crewEditDetails.nrt}
                    type="number"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </>
          )}
      </div>
      {crewEditDetails.crews_signingin &&
        crewEditDetails.crews_signingin.value === "YES" && (
          <>
            <div
              style={{ marginBottom: "10px", marginTop: "10px" }}
              className="row"
            >
              <div className="col-lg-6">
                <label className="font-size">
                  Names of Filipino Signing In
                </label>

                <div>
                  <input
                    className="form-control"
                    name="nrt"
                    value={crewEditDetails.nrt}
                    type="text"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <label className="font-size">Names of Foreign Signin In</label>

                <div>
                  <input
                    className="form-control"
                    name="nrt"
                    value={crewEditDetails.nrt}
                    type="text"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </>
        )}

      <div style={{ marginBottom: "10px", marginTop: "10px" }} className="row">
        <div className="col-lg-6">
          <label className="font-size">Are there Crews Signing off?</label>

          <div style={{ width: "100%" }}>
            <Select
              filterOption={createFilter({ ignoreAccents: false })}
              options={yesAndNoForm}
              value={crewEditDetails.crews_signingoff}
              onChange={(event) =>
                selectChangeHandlder(event, "crews_signingoff")
              }
            />
          </div>
        </div>
        {crewEditDetails.crews_signingoff &&
          crewEditDetails.crews_signingoff.value === "YES" && (
            <>
              <div className="col-lg-3">
                <label className="font-size">
                  Number of Filipino Crew Signing off
                </label>

                <div>
                  <input
                    className="form-control"
                    name="dwt"
                    value={crewEditDetails.dwt}
                    type="number"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <label className="font-size">
                  Number of Foreign Crew Signing off
                </label>

                <div>
                  <input
                    className="form-control"
                    name="nrt"
                    value={crewEditDetails.nrt}
                    type="number"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </>
          )}
      </div>
      {crewEditDetails.crews_signingoff &&
        crewEditDetails.crews_signingoff.value === "YES" && (
          <>
            <div
              style={{ marginBottom: "10px", marginTop: "10px" }}
              className="row"
            >
              <div className="col-lg-6">
                <label className="font-size">
                  Names of Filipino Signing off
                </label>

                <div>
                  <input
                    className="form-control"
                    name="nrt"
                    value={crewEditDetails.nrt}
                    type="text"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <label className="font-size">Names of Foreign Signin off</label>

                <div>
                  <input
                    className="form-control"
                    name="nrt"
                    value={crewEditDetails.nrt}
                    type="text"
                    onChange={editCrewDetailsHandler}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </>
        )}

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
  editCrewDetails: state.vessels.editCrewDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // setDataArrival: (data) => dispatch(editArrivalDetailsModal(data)),
    // setDataDeparture: (data) => dispatch(editDepartureDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewVesselInfo);
