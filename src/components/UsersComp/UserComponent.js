import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUserList,
  editUserDetailsModal,
  deleteEditDetailsUser,
  alertShowUsers,
} from "../../store/action/index";

import Spinner from "../UI/Spinner/Spinner";
import Table from "../UI/Table/Table";
import SweetAlert from "react-bootstrap-sweetalert";
import UserModal from "./UserModal";
import classes from "./UserHeader.module.css";

const UserHeader = (props) => {
  const [deletingUser, setDeletingUser] = useState({ deleteMsg: false });
  const [searchHeader, EditSearchHeader] = useState("");

  useEffect(() => {
    props.onFetchUser(props.userToken);
    // console.log(props.userToken);
  }, []);

  const editSearchHeaderHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    EditSearchHeader({ ...searchHeader, [name]: value });
  };

  const warningDeleting = (id) => {
    setDeletingUser({ deleteMsg: true, u_id: id });
  };

  const deleteUser = () => {
    props.delete(props.userToken, deletingUser.u_id);
    setDeletingUser({ deleteMsg: false });
  };

  const closeModal = () => {
    props.openModal(null);
  };

  const searchQuery = (e) => {
    e.preventDefault();
    props.onFetchUser(props.userToken, searchHeader.searchKey);
  };

  const closeSuccess = () => {
    props.alertConfirm(false);
  };

  useEffect(() => {
    props.isSuccess && props.onFetchUser(props.userToken);
  }, [props.isSuccess]);

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "First Name",
          accessor: "firstname",
        },
        {
          Header: "Last Name",
          accessor: "lastname",
        },
        {
          Header: "Middle Name",
          accessor: "middlename",
        },
        {
          Header: "Username",
          accessor: "username",
        },
        {
          width: 150,
          Header: "Edit",
          Cell: (data) => {
            let {
              row: { original },
            } = data;

            return (
              <>
                <button
                  onClick={() => props.openModal(original)}
                  className="btn btn-md btn-primary"
                >
                  Edit
                </button>{" "}
                <button
                  onClick={() => warningDeleting(original.u_id)}
                  className="btn btn-md btn-danger"
                >
                  Delete
                </button>
              </>
            );
          },
        },
      ],
    },
  ];

  return (
    <>
      <div className={classes.UsersHeader}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>User Information</h3>
        </header>
        <div className={classes.searchBar}>
          <div className={classes.Input}>
            <label className={classes.Label}>Search:</label>
            <input
              placeholder="Type here...."
              className={classes.InputElement}
              name="searchKey"
              value={searchHeader.searchKey}
              onChange={editSearchHeaderHandler}
              style={{ width: "100%" }}
              type="text"
            />
          </div>
          <button onClick={(e) => searchQuery(e)} className={classes.btn}>
            <i className="fa fa-search"></i>
          </button>

          <button
            onClick={() => props.openModal({})}
            className={classes.btnAdd}
          >
            <i className="fa fa-plus"></i>&nbsp; add user
          </button>
        </div>
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
            overflow: "auto",
            maxHeight: "70vh",
          }}
          className="row"
        >
          <div className="table-responsive">
            {props.loadingUsers ? (
              <Spinner />
            ) : (
              <Table
                columns={columns}
                data={props.userList}
                // selectedRows={props.selectedRows}
                // setSelectedRows={props.setSelectedRows}
              />
            )}
          </div>
        </div>
      </div>
      {props.editUserDetails && (
        <UserModal
          show={props.editUserDetails ? true : false}
          close={closeModal}
        />
      )}

      <SweetAlert
        success
        title="Success!"
        show={props.isSuccess}
        onConfirm={closeSuccess}
      >
        {"Success Updating Data"}
      </SweetAlert>

      <SweetAlert
        warning
        showCancel
        confirmBtnText="Confirm"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Deleting Data"
        show={deletingUser.deleteMsg}
        onConfirm={() => deleteUser()}
        onCancel={() => setDeletingUser({ deleteMsg: false })}
      >
        {"Do you want to delete this user"}
      </SweetAlert>
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  userList: state.user.userList,
  editUserDetails: state.user.editUserDetails,
  loadingUsers: state.user.loadingUsers,
  isSuccess: state.user.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (token, data) => dispatch(fetchUserList(token, data)),
    openModal: (data) => dispatch(editUserDetailsModal(data)),
    alertConfirm: (data) => dispatch(alertShowUsers(data)),
    delete: (token, id) => dispatch(deleteEditDetailsUser(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
