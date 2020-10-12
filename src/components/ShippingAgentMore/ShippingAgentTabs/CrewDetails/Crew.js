import React, { useState } from "react";
import { connect } from "react-redux";
import {
  editCrewDetailsModal,
  deleteEditDetailsCrew,
} from "../../../../store/action/index";
// import { editCrewsDetailsModal } from "../../../../store/action/index";
import classes from "./Crew.module.css";
import SweetAlert from "react-bootstrap-sweetalert";

const Crew = (props) => {
  const [deletingCrew, setDeletingCrew] = useState(false);
  const { fullname, is_fil, status } = props.details;

  const deleteCrew = () => {
    props.onDelete(props.userToken, props.details.id);
    setDeletingCrew(false);
  };

  return (
    <>
      <div style={{ marginBottom: "15px" }} className="col-lg-6 col-md-12">
        <div className={classes.Crew}>
          <div className={classes.header}>
            <div>
              <img
                style={{ maxWidth: "350px" }}
                className="img-thumbnail img-fluid"
                src={require("../../../../assets/images/1.png")}
              />
            </div>
            <div>
              <button
                onClick={() => props.openModal(props.details)}
                className="btn btn-default btn-md"
              >
                Edit
              </button>
              <button
                onClick={() => setDeletingCrew(true)}
                className="btn btn-default btn-md"
              >
                Delete
              </button>
            </div>
          </div>
          <div className={classes.CrewInfo}>
            <div className={classes.name}>{fullname}</div>
            <div>
              Is Filipino:<strong> {is_fil === 1 ? "Yes" : "No"}</strong>
            </div>
            <div>
              Status:
              <strong> {status === 1 ? "On Signer" : "Off Signer"}</strong>
            </div>
          </div>
        </div>
      </div>

      <SweetAlert
        warning
        showCancel
        confirmBtnText="Confirm"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Deleting Data"
        show={deletingCrew}
        onConfirm={() => deleteCrew()}
        onCancel={() => setDeletingCrew(false)}
      >
        {"Do you want to delete this Crew"}
      </SweetAlert>
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(editCrewDetailsModal(data)),
    onDelete: (token, data) => dispatch(deleteEditDetailsCrew(token, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Crew);
