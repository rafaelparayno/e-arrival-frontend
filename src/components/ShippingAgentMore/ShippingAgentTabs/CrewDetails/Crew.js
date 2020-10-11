import React from "react";
import { connect } from "react-redux";
// import { editCrewsDetailsModal } from "../../../../store/action/index";
import classes from "./Crew.module.css";

const Crew = (props) => {
  const { fullname, nationality, status } = props.details;

  return (
    <div style={{ marginBottom: "15px" }} className="col-lg-6 col-md-12">
      <div className={classes.Crew}>
        <div className={classes.header}>
          <div>
            <img
              style={{ maxWidth: "350px" }}
              className="img-thumbnail img-fluid"
              src={require("../../../../assets/images/judy.jpg")}
            />
          </div>
          <div>
            <button
              //   onClick={() => props.openModal(props.details)}
              className="btn btn-default btn-md"
            >
              Edit
            </button>
            <button className="btn btn-default btn-md">Delete</button>
          </div>
        </div>
        <div className={classes.CrewInfo}>
          <div className={classes.name}>{fullname}</div>
          <div>
            Is Filipino:<strong> {nationality}</strong>
          </div>
          <div>
            Status:<strong> {status}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
