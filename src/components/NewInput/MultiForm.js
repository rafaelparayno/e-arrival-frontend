import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  editDataDetailsModal,
  fetchBasicDetail,
} from "../../store/action/index";
import Table from "../UI/Table/Table";
import AddDataModal from "./AddDataModal";
import { format } from "date-fns";

import classes from "./MultiForm.module.css";

const MultiForm = React.memo((props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.onFetchData();
  }, []);

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "VESSEL NAME",
          accessor: "vessel_name",
        },
        {
          Header: "DATE OF ARRIVAL",
          accessor: "date_arrival",
        },
        {
          Header: "TIME OF ARRIVAL",
          accessor: "time_arrival",
        },
        {
          Header: "NO. OF FIL SIGN IN.",
          accessor: "no_fil_signin",
        },
        {
          Header: "NO. OF FOR SIGN IN.",
          accessor: "no_for_singin",
        },
        {
          Header: "NO. OF FOR SIGN OFF.",
          accessor: "no_fil_signoff",
        },
        {
          Header: "NO. OF FOR SIGN OFF.",
          accessor: "no_for_signoff",
        },
        {
          Header: "Quarantine Facility.",
          accessor: "quaratine_facility",
        },
        {
          Header: "CREW SERVICE VESSEL.",
          accessor: "crew_service_boat",
        },
        {
          Header: "DEPARTURE DATE.",
          accessor: "dep_date",
        },
        {
          Header: "DEPARTURE TIME.",
          accessor: "dep_time",
        },
        {
          Header: "NEXT PORT OF CALL.",
          accessor: "nextport",
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
        //           onClick={() => props.openModal(original)}
        //           className="btn btn-md btn-primary"
        //         >
        //           Edit
        //         </button>{" "}
        //         <button
        //           onClick={() => warningDeleting(original.id)}
        //           className="btn btn-md btn-danger"
        //         >
        //           Delete
        //         </button>{" "}
        //         {/* <button
        //           onClick={() => viewHome(original.id)}
        //           className="btn btn-md btn-info"
        //         >
        //           View More
        //         </button> */}
        //         <NavLink
        //           to={`/agent/${original.id}`}
        //           className="btn btn-md btn-info"
        //         >
        //           View More
        //         </NavLink>
        //       </>
        //     );
        //   },
        // },
      ],
    },
  ];

  return (
    <>
      <div className={classes.MultiForm}>
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
            <i className="fa fa-plus"></i>&nbsp; New Data
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
            {/* {props.loadingshippingAgents ? (
              <Spinner />
            ) : (
              <Table
                className="table table-striped table-bordered table-hover"
                columns={columns}
                data={props.shippingAgentList}
                // selectedRows={props.selectedRows}
                // setSelectedRows={props.setSelectedRows}
              />
            )} */}

            <Table
              className="table table-striped table-bordered table-hover"
              columns={columns}
              data={props.DataList}
              // selectedRows={props.selectedRows}
              // setSelectedRows={props.setSelectedRows}
            />
          </div>
        </div>
      </div>

      {props.editDataDetails && (
        <AddDataModal
          show={props.editDataDetails ? true : false}
          // close={closeModal}
        />
      )}
    </>
  );
});

const mapStateToProps = (state) => ({
  // userToken: state.auth.token,
  DataList: state.multiform.DataList.map((data) => ({
    ...data,
    vessel_name: data.vessel_infos[0] && data.vessel_infos[0].name,
    date_arrival: data.arrivals[0] && data.arrivals[0].date,
    time_arrival:
      data.arrivals[0] &&
      format(
        new Date(`${data.arrivals[0].date} ${data.arrivals[0].time}`),
        "h:mm a"
      ),
    no_fil_signin: data.new_crews[0] && data.new_crews[0].no_fil_singin,
    no_for_singin: data.new_crews[0] && data.new_crews[0].no_for_singin,
    no_fil_signoff: data.new_crews[0] && data.new_crews[0].no_fil_singoff,
    no_for_signoff: data.new_crews[0] && data.new_crews[0].no_for_signoff,
    dep_date: data.vessel_departures[0] && data.vessel_departures[0].date,
    dep_time:
      data.vessel_departures[0] &&
      format(
        new Date(
          `${data.vessel_departures[0].date} ${data.vessel_departures[0].time}`
        ),
        "h:mm a"
      ),
    nextport: data.vessel_departures[0] && data.vessel_departures[0].portcall,
  })),
  editDataDetails: state.multiform.editDataDetails,

  //   isSuccess: state.ship.isSuccess,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(editDataDetailsModal(data)),
    onFetchData: (token, data) => dispatch(fetchBasicDetail(token, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiForm);
