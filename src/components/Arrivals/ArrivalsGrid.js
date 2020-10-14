import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import axios from "axios";
import Table from "../UI/Table/Table";
import "./ArrivalGrid.css";

const ArrivalsGrid = React.memo((props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const today = format(new Date(), "yyyy-MM-dd");

      const result = await axios.post(
        "/arrivals/today",
        { date: today },
        {
          headers: {
            Authorization: `Bearer ${props.userToken}`,
          },
        }
      );

      if (result.data) {
        const dataCols = result.data.map((data) => ({
          ...data,

          name: data.vessel && data.vessel.name,
          quan: "sample",
          signInFil: data.vessel && data.vessel.signinFil,
          signInFor: data.vessel && data.vessel.signinForeign,
          singOffFil: data.vessel && data.vessel.signOutFil,
          signOffFor: data.vessel && data.vessel.signOutForeign,
        }));

        setData(dataCols);
      }
    };

    fetchData();
  }, []);

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
          accessor: "signInFil",
        },
        {
          Header: "No. of Foreign Sign in",
          accessor: "signInFor",
        },
        {
          Header: "No. of Filipino Sign off",
          accessor: "singOffFil",
        },
        {
          Header: "No. of Foreign Sign off",
          accessor: "signOffFor",
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
          className="table arrival table-striped table-bordered table-hover"
          columns={columns}
          data={data}
          // selectedRows={props.selectedRows}
          // setSelectedRows={props.setSelectedRows}
        />
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  userToken: state.auth.token,
});

export default connect(mapStateToProps, null)(ArrivalsGrid);
