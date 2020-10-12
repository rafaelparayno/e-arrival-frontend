import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  fetchVessel,
  editVesselDetailsModal,
  deleteEditDetailsVessel,
  selectedVesselDetails,
  alertShowVessels,
} from "../../../../store/action/index";
import ArrivingModal from "./ArrivingModal";

import Spinner from "../../../UI/Spinner/Spinner";
import Table from "../../../UI/Table/Table";
import SweetAlert from "react-bootstrap-sweetalert";
import classes from "./VesselDetails.module.css";

const VesselDetails = React.memo((props) => {
  const [selectedRows, setSelectedRows] = useState("");

  useEffect(() => {
    const code = props.code;
    props.onFecthVessel(props.userToken, code);
  }, []);

  useEffect(() => {
    const code = props.code;
    props.isSuccess && props.onFecthVessel(props.userToken, code);
  }, [props.isSuccess]);

  const closeModal = () => {
    props.openModal(null);
  };

  useEffect(() => {
    // selectedRows && props.onFetchCrew(props.userToken, selectedRows.vessels_id);
    selectedRows && props.onSelectData(selectedRows);
  }, [selectedRows]);

  const closeSuccess = () => {
    props.alertConfirm(false);
  };

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Vessel Name",
          accessor: "name",
        },
        {
          Header: "Vessel Flag",
          accessor: "vessel_flag",
        },
        {
          Header: "IMO Number",
          accessor: "imonumber",
        },
        {
          Header: "GRT",
          accessor: "GRT",
        },
        {
          Header: "DWT",
          accessor: "DWT",
        },
        {
          Header: "NRT",
          accessor: "NRT",
        },
        {
          Header: "LOA",
          accessor: "LOA",
        },
        {
          Header: "Call Sign",
          accessor: "callsign",
        },
        // {
        //   width: 150,
        //   Header: "Edit",
        //   Cell: (data) => {
        //     let {
        //       row: { original },
        //     } = data;

        //     return (
        //       <>
        //         <button
        //           // onClick={() => props.openModal(original)}
        //           className="btn btn-md btn-primary"
        //         >
        //           Edit
        //         </button>{" "}
        //         <button
        //           // onClick={() => warningDeleting(original.u_id)}
        //           className="btn btn-md btn-danger"
        //         >
        //           Delete
        //         </button>{" "}
        //       </>
        //     );
        //   },
        // },
      ],
    },
  ];

  return (
    <>
      <div className={classes.VesselDetails}>
        <header>
          <h3 style={{ marginLeft: "5px" }}>Vessel</h3>
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
            <i className="fa fa-plus"></i>&nbsp; New Vessel Arriving
          </button>
        </div>
        <div
          style={{
            margin: "10px 5px",
            padding: "0px 5px",
            overflow: "auto",
            // height: "70vh",
            maxHeight: "23vh",
          }}
          className="row"
        >
          <div className="table-responsive">
            {props.loadingVessels ? (
              <Spinner />
            ) : (
              <Table
                columns={columns}
                data={props.VesselList}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            )}
          </div>
        </div>
      </div>

      {props.editVesselDetails && (
        <ArrivingModal
          code={props.code}
          show={props.editVesselDetails ? true : false}
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
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
  VesselList: state.vessels.VesselList,
  isSuccess: state.vessels.isSuccess,
  editVesselDetails: state.vessels.editVesselDetails,
  loadingVessels: state.vessels.loadingVessels,
  selectedVessel: state.vessels.selectedVessel,
  //   isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthVessel: (token, data, query) =>
      dispatch(fetchVessel(token, data, query)),

    openModal: (data) => dispatch(editVesselDetailsModal(data)),
    alertConfirm: (data) => dispatch(alertShowVessels(data)),
    onSelectData: (data) => dispatch(selectedVesselDetails(data)),
    // // delete: (token, id) => dispatch(deleteEditDetailsUser(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VesselDetails);
