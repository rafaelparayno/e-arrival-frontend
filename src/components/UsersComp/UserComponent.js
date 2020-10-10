import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserList, editUserDetailsModal } from "../../store/action/index";

import Table from "../UI/Table/Table";
// import columns from "./UserColumnsHeader";
import UserModal from "./UserModal";
import classes from "./UserHeader.module.css";

const UserHeader = (props) => {
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

  const closeModal = () => {
    props.openModal(null);
  };

  const searchQuery = (e) => {
    e.preventDefault();
    props.onFetchUser(props.userToken, searchHeader.searchKey);
  };

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
                <button className="btn btn-md btn-danger">Delete</button>
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
            overflowX: "auto",
            height: "70vh",
          }}
          className="row"
        >
          <div className="table-responsive">
            <Table
              columns={columns}
              data={props.userList}
              // selectedRows={props.selectedRows}
              // setSelectedRows={props.setSelectedRows}
            />
          </div>
        </div>
      </div>
      {props.editUserDetails && (
        <UserModal
          show={props.editUserDetails ? true : false}
          close={closeModal}
        />
      )}
      {/* <UserModal show={true} /> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  userList: state.user.userList,
  editUserDetails: state.user.editUserDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUser: (token, data) => dispatch(fetchUserList(token, data)),
    openModal: (data) => dispatch(editUserDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
