import React from "react";
import Table from "../UI/Table/Table";
import "./ArrivalGrid.css";

const ArrivalsGrid = React.memo((props) => {
  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Vessel Name",
          accessor: "name",
        },
        {
          Header: "Time of Arrival",
          accessor: "time",
        },
        {
          Header: "No. of Filipino Sign in",
          accessor: "count_fil",
        },
        {
          Header: "No. of Foreign Sign in",
          accessor: "count_for",
        },
        {
          Header: "Quaratine Facility",
          accessor: "quan",
        },
      ],
    },
  ];
  return (
    <>
      <div className="table-responsive">
        {/* {props.loadingshippingAgents ? (
          <Spinner />
        ) : (
          <Table
            columns={columns}
            data={props.shippingAgentList}
            // selectedRows={props.selectedRows}
            // setSelectedRows={props.setSelectedRows}
          />
        )} */}
        <Table
          className="table table-striped table-bordered table-hover"
          columns={columns}
          data={[]}
          // selectedRows={props.selectedRows}
          // setSelectedRows={props.setSelectedRows}
        />
      </div>
    </>
  );
});

export default ArrivalsGrid;
