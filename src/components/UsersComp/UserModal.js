import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../UI/Modal/Modal";
import SaveButton from "../UI/SaveButton/SaveButton";

import classes from "./UserModal.module.css";

const UserModal = React.memo((props) => {
  const [userDetailEdit, setUserDetailEdit] = useState({});
  const { close, code } = props;

  const editUserDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setUserDetailEdit({ ...userDetailEdit, [name]: value });
  };

  return (
    <>
      {console.log(userDetailEdit)},
      <Modal
        title={
          userDetailEdit.code ? (
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
                //   value={personelDetailEdit.name}
                type="text"
                //   onChange={editPersonelDetailEditTextHandler}
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
                //   value={personelDetailEdit.name}
                type="text"
                //   onChange={editPersonelDetailEditTextHandler}
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
                //   value={personelDetailEdit.name}
                type="text"
                //   onChange={editPersonelDetailEditTextHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-4">
            <label className="font-size">Email</label>

            <div>
              <input
                className="form-control"
                name="email"
                //   value={personelDetailEdit.email}
                type="text"
                //   onChange={editPersonelDetailEditTextHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Password</label>

            <div>
              <input
                className="form-control"
                name="password"
                //   value={personelDetailEdit.email}
                type="password"
                //   onChange={editPersonelDetailEditTextHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label className="font-size">Role</label>

            <div className={classes.btnGroup} data-toggle="buttons">
              <label
                className={
                  userDetailEdit.role_id === "1"
                    ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                    : `${classes.btn} ${classes.btnDefault}`
                }
              >
                <input
                  type="radio"
                  name="role_id"
                  value={1}
                  checked={userDetailEdit.role_id === "1"}
                  onChange={editUserDetailHandler}
                />
                {/* <input type="radio" onChange={handleChange} name='role_id' value="M" data-bv-field="gender" /> */}
                <i class="fa fa-user"></i> Admin{" "}
              </label>{" "}
              <label
                className={
                  userDetailEdit.role_id === "0"
                    ? `${classes.btn} ${classes.btnDefault} ${classes.active}`
                    : `${classes.btn} ${classes.btnDefault}`
                }
              >
                <input
                  type="radio"
                  name="role_id"
                  value={0}
                  checked={userDetailEdit.role_id === "0"}
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

            // onClick={(e) => save(e)}
            // loading={props.loadingSaving}
            // disabled={!personelDetailEdit.company_name}
            />

            <button className="btn btn-sm btn-default">Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default UserModal;
