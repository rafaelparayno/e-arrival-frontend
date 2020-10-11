import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchShippingAgent,
  editShippingAgentDetailsModal,
  deleteEditDetailsShippingAgent,
  alertShowShippingAgents,
} from "../../store/action/index";

import Spinner from "../UI/Spinner/Spinner";
import Table from "../UI/Table/Table";
import SweetAlert from "react-bootstrap-sweetalert";
import classes from "./ShippingAgent.module.css";

const ShippingAgent = React.memo((props) => {
  useEffect(() => {
    props.onFecthShip(props.userToken);
    // console.log(props.userToken);
  }, []);

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Email Address",
          accessor: "e_add",
        },
        {
          Header: "Name",
          accessor: "shipping_agent_name",
        },
        {
          Header: "Contact Person",
          accessor: "contact_person",
        },
        {
          Header: "Contact No",
          accessor: "contact_no",
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
                  // onClick={() => props.openModal(original)}
                  className="btn btn-md btn-primary"
                >
                  Edit
                </button>{" "}
                <button
                  // onClick={() => warningDeleting(original.u_id)}
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
      <div className={classes.ShippingAgent}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>Shipping Agent</h3>
        </header>
        <div className={classes.searchBar}>
          <div className={classes.Input}>
            <label className={classes.Label}>Search:</label>
            <input
              placeholder="Type here...."
              className={classes.InputElement}
              name="searchKey"
              // value={searchHeader.searchKey}
              // onChange={editSearchHeaderHandler}
              style={{ width: "100%" }}
              type="text"
            />
          </div>
          <button
            // onClick={(e) => searchQuery(e)}
            className={classes.btn}
          >
            <i className="fa fa-search"></i>
          </button>

          <button
            onClick={() => props.openModal({})}
            className={classes.btnAdd}
          >
            <i className="fa fa-plus"></i>&nbsp; add Shipping Agent
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
            {/* {props.loadingUsers ? (
              <Spinner />
            ) : (
              <Table
                columns={columns}
                data={props.userList}
                // selectedRows={props.selectedRows}
                // setSelectedRows={props.setSelectedRows}
              />
            )} */}
            <Table
              columns={columns}
              data={props.shippingAgentList}
              // selectedRows={props.selectedRows}
              // setSelectedRows={props.setSelectedRows}
            />
          </div>
        </div>
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  shippingAgentList: state.ship.shippingAgentList,
  editshipDetails: state.ship.editshipDetails,
  loadingships: state.ship.loadingships,
  isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthShip: (token, data) => dispatch(fetchShippingAgent(token, data)),
    openModal: (data) => dispatch(editShippingAgentDetailsModal(data)),
    // alertConfirm: (data) => dispatch(alertShowUsers(data)),
    // delete: (token, id) => dispatch(deleteEditDetailsUser(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAgent);
