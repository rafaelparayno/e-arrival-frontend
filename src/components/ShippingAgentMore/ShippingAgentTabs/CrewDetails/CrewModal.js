import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Modal from "../../../UI/Modal/Modal";
import SaveButton from "../../../UI/SaveButton/SaveButton";
import {
  saveEditDetailsCrew,
  UpdateEditDetailsCrew,
} from "../../../../store/action/index";
import classes from "./CrewModal.module.css";

const CrewModal = React.memo((props) => {
  const [crewDetailEdit, setCrewDetailEdit] = useState({});
  const { close, vesselsid } = props;

  useEffect(() => {
    props.editCrewDetails && setCrewDetailEdit(props.editCrewDetails);
  }, [props.editCrewDetails]);

  const editCrewDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setCrewDetailEdit({ ...crewDetailEdit, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();
    crewDetailEdit.id
      ? props.onUpdate(props.userToken, {
          is_fil: crewDetailEdit.is_fil,
          firstname: crewDetailEdit.firstname,
          lastname: crewDetailEdit.lastname,
          middlename: crewDetailEdit.crewDetailEdit,
          id: crewDetailEdit.id,
          status: crewDetailEdit.status,
        })
      : props.onSave(props.userToken, {
          ...crewDetailEdit,
          vessels_id: vesselsid,
        });
  };

  return (
    <Modal
      title={
        crewDetailEdit.id ? (
          <span>
            <i className="fa fa-edit"></i>&nbsp;Edit Crew
          </span>
        ) : (
          <span>
            <i className="fa fa-plus-square"></i>&nbsp;New Crew
          </span>
        )
      }
      show={props.show}
      modalClosed={props.close}
    >
      <div style={{ marginBottom: "15px" }} className="row">
        <div className="col-lg-4">
          <label className="font-size">First Name</label>

          <div>
            <input
              className="form-control"
              name="firstname"
              value={crewDetailEdit.firstname}
              type="text"
              onChange={editCrewDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Middle Name</label>

          <div>
            <input
              className="form-control"
              name="middlename"
              value={crewDetailEdit.middlename}
              type="text"
              onChange={editCrewDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="font-size">Last Name</label>

          <div>
            <input
              className="form-control"
              name="lastname"
              value={crewDetailEdit.lastname}
              type="text"
              onChange={editCrewDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <label className="font-size">Is Filipino?</label>

        <div className={classes.btnGroup} data-toggle="buttons">
          <label
            className={
              crewDetailEdit.is_fil == "1"
                ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                : `${classes.btn} ${classes.btnDefault}`
            }
          >
            <input
              type="radio"
              name="is_fil"
              value={1}
              checked={crewDetailEdit.is_fil == "1"}
              onChange={editCrewDetailHandler}
            />
            {/* <input type="radio" onChange={handleChange} name='is_fil' value="M" data-bv-field="gender" /> */}
            <i className="fas fa-flag"></i> &nbsp;Filipino{" "}
          </label>{" "}
          <label
            className={
              crewDetailEdit.is_fil == "0"
                ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                : `${classes.btn} ${classes.btnDefault}`
            }
          >
            <input
              type="radio"
              name="is_fil"
              value={0}
              checked={crewDetailEdit.is_fil == "0"}
              onChange={editCrewDetailHandler}
            />
            <i className="fas fa-flag-usa"></i> &nbsp;Foreigner{" "}
          </label>
        </div>
      </div>

      <div className="col-lg-4">
        <label className="font-size">Status</label>

        <div className={classes.btnGroup} data-toggle="buttons">
          <label
            className={
              crewDetailEdit.status == "1"
                ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                : `${classes.btn} ${classes.btnDefault}`
            }
          >
            <input
              type="radio"
              name="status"
              value={1}
              checked={crewDetailEdit.status == "1"}
              onChange={editCrewDetailHandler}
            />
            {/* <input type="radio" onChange={handleChange} name='status' value="M" data-bv-field="gender" /> */}
            <i className="fas fa-sign-in-alt"></i> on Signers{" "}
          </label>{" "}
          <label
            className={
              crewDetailEdit.status == "0"
                ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                : `${classes.btn} ${classes.btnDefault}`
            }
          >
            <input
              type="radio"
              name="status"
              value={0}
              checked={crewDetailEdit.status == "0"}
              onChange={editCrewDetailHandler}
            />
            <i className="fas fa-sign-out-alt"></i> Off Signers{" "}
          </label>
        </div>
      </div>
      <div className="row">
        <div style={{ marginTop: "20px" }} className="col-lg-12">
          <SaveButton
            onClick={(e) => save(e)}
            // loading={props.loadingSaving}
            // disabled={
            //   !userDetailEdit.firstname ||
            //   !userDetailEdit.lastname ||
            //   !userDetailEdit.username ||
            //   !userDetailEdit.role_id
            // }
          />

          <button onClick={() => close()} className="btn btn-sm btn-default">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  editCrewDetails: state.crew.editCrewDetails,
  isSuccess: state.crew.isSuccess,
  // loadingSaving: state.ship.loadingSaving,
  // userToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (token, data) => dispatch(saveEditDetailsCrew(token, data)),
    onUpdate: (token, data) => dispatch(UpdateEditDetailsCrew(token, data)),
    //   openModal: (data) => dispatch(editShippingAgentDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CrewModal);
