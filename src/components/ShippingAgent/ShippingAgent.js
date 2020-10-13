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
import ShippingAgentModal from "./ShippingAgentModal";

const ShippingAgent = React.memo((props) => {
  const [deletingAgency, setDeletingAgency] = useState({ deleteMsg: false });
  const [searchHeader, EditSearchHeader] = useState("");

  useEffect(() => {
    props.onFecthShip(props.userToken);
    // console.log(props.userToken);
  }, []);

  useEffect(() => {
    props.isSuccess && props.onFecthShip(props.userToken);
  }, [props.isSuccess]);

  const warningDeleting = (id) => {
    setDeletingAgency({ deleteMsg: true, id: id });
  };

  const deleteAgency = () => {
    props.delete(props.userToken, deletingAgency.id);
    setDeletingAgency({ deleteMsg: false });
  };

  const closeModal = () => {
    props.openModal(null);
  };

  const viewHome = (id) => {
    window.open(`/agent/${id}`, "_blank");
  };

  const closeSuccess = () => {
    props.alertConfirm(false);
  };

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Name",
          accessor: "shipping_agent_name",
        },
        {
          Header: "Email Address",
          accessor: "e_add",
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
                  onClick={() => props.openModal(original)}
                  className="btn btn-md btn-primary"
                >
                  Edit
                </button>{" "}
                <button
                  onClick={() => warningDeleting(original.id)}
                  className="btn btn-md btn-danger"
                >
                  Delete
                </button>{" "}
                <button
                  onClick={() => viewHome(original.id)}
                  className="btn btn-md btn-info"
                >
                  View More
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
            <i className="fa fa-plus"></i>&nbsp; Add Shipping Agent
          </button>
        </div>
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
          }}
          className="row"
        >
          <div className="table-responsive">
            {props.loadingshippingAgents ? (
              <Spinner />
            ) : (
              <Table
                columns={columns}
                data={props.shippingAgentList}
                // selectedRows={props.selectedRows}
                // setSelectedRows={props.setSelectedRows}
              />
            )}
          </div>
        </div>
      </div>

      {props.editShippingAgentDetails && (
        <ShippingAgentModal
          show={props.editShippingAgentDetails ? true : false}
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
        show={deletingAgency.deleteMsg}
        onConfirm={() => deleteAgency()}
        onCancel={() => setDeletingAgency({ deleteMsg: false })}
      >
        {"Do you want to delete this Agency"}
      </SweetAlert>
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  shippingAgentList: state.ship.shippingAgentList,
  editShippingAgentDetails: state.ship.editShippingAgentDetails,
  loadingshippingAgents: state.ship.loadingshippingAgents,
  isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthShip: (token, data) => dispatch(fetchShippingAgent(token, data)),
    openModal: (data) => dispatch(editShippingAgentDetailsModal(data)),
    alertConfirm: (data) => dispatch(alertShowShippingAgents(data)),
    delete: (token, id) => dispatch(deleteEditDetailsShippingAgent(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAgent);
