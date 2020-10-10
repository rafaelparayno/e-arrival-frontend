import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../UI/Modal/Modal";
import {
  editUserDetailsModal,
  saveEditDetailsUser,
  UpdateEditDetailsUser,
} from "../../store/action/index";
import SaveButton from "../UI/SaveButton/SaveButton";

import classes from "./UserModal.module.css";

const UserModal = React.memo((props) => {
  const [userDetailEdit, setUserDetailEdit] = useState({});
  const { close, code } = props;

  useEffect(() => {
    props.editUserDetails && setUserDetailEdit(props.editUserDetails);
  }, [props.editUserDetails]);

  const editUserDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setUserDetailEdit({ ...userDetailEdit, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();
    userDetailEdit.u_id
      ? props.update(props.userToken, userDetailEdit)
      : props.save(props.userToken, userDetailEdit);
  };

  return (
    <Modal
      title={
        userDetailEdit.u_id ? (
          <span>
            <i className="fa fa-edit"></i>&nbsp;Edit User
          </span>
        ) : (
          <span>
            <i className="fa fa-plus-square"></i>&nbsp;New User
          </span>
        )
      }
      show={props.show}
      modalClosed={close}
    >
      <div className="row">
        <div className="col-lg-4">
          <label className="font-size">First Name</label>

          <div>
            <input
              className="form-control"
              name="firstname"
              value={userDetailEdit.firstname}
              type="text"
              onChange={editUserDetailHandler}
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
              value={userDetailEdit.middlename}
              type="text"
              onChange={editUserDetailHandler}
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
              value={userDetailEdit.lastname}
              type="text"
              onChange={editUserDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-4">
          <label className="font-size">Username</label>

          <div>
            <input
              className="form-control"
              name="username"
              value={userDetailEdit.username}
              type="text"
              onChange={editUserDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        {!userDetailEdit.u_id && (
          <div className="col-lg-4">
            <label className="font-size">Password</label>

            <div>
              <input
                className="form-control"
                name="password"
                value={userDetailEdit.password}
                type="password"
                onChange={editUserDetailHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        )}

        <div className="col-lg-4">
          <label className="font-size">Role</label>

          <div className={classes.btnGroup} data-toggle="buttons">
            <label
              className={
                userDetailEdit.role_id == "1"
                  ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                  : `${classes.btn} ${classes.btnDefault}`
              }
            >
              <input
                type="radio"
                name="role_id"
                value={1}
                checked={userDetailEdit.role_id == "1"}
                onChange={editUserDetailHandler}
              />
              {/* <input type="radio" onChange={handleChange} name='role_id' value="M" data-bv-field="gender" /> */}
              <i className="fa fa-user"></i> Admin{" "}
            </label>{" "}
            <label
              className={
                userDetailEdit.role_id == "0"
                  ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                  : `${classes.btn} ${classes.btnDefault}`
              }
            >
              <input
                type="radio"
                name="role_id"
                value={0}
                checked={userDetailEdit.role_id == "0"}
                onChange={editUserDetailHandler}
              />
              <i className="fa fa-users"></i> Client{" "}
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ marginTop: "10px" }} className="col-lg-12">
          <SaveButton
            onClick={(e) => save(e)}
            loading={props.loadingSaving}
            disabled={
              !userDetailEdit.firstname ||
              !userDetailEdit.lastname ||
              !userDetailEdit.username ||
              !userDetailEdit.role_id
            }
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
  editUserDetails: state.user.editUserDetails,
  loadingSaving: state.user.loadingSaving,
  userToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(editUserDetailsModal(data)),
    save: (token, data) => dispatch(saveEditDetailsUser(token, data)),
    update: (token, data) => dispatch(UpdateEditDetailsUser(token, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
