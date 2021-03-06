import React, { useState, useEffect } from "react";
// import { editArrivalDetailsModal } from "../../../store/action/index";
import { connect } from "react-redux";
import axios from "axios";
import { eo, es, enUS } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "react-time-picker";
import Select, { createFilter } from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const ArrivalDetailsTab = (props) => {
  const [arrivalEditDetails, setArrivalEditDetails] = useState({});
  const locales = {
    "en-US": enUS,
    es: es,
    eo: eo,
    // ...
  };
  const { code } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://199.241.138.64/arrivals/basic/${code}`,
        {
          headers: {
            Authorization: `Bearer ${props.userToken}`,
          },
        }
      );

      result.data &&
        setArrivalEditDetails({
          ...result.data,
          date: result.data.date && new Date(result.data.date),
          purpose_call: {
            label: result.data.purpose,
            value: result.data.purpose,
          },
        });
    };

    fetchData();
  }, []);

  const purposeCallData = [
    {
      label: "DISCHARGING",
      value: "DISCHARGING",
    },
    {
      label: "LOADING",
      value: "LOADING",
    },
    {
      label: "CREW CHANGE",
      value: "CREW CHANGE",
    },
    {
      label: "DISCHARGING AND CREW CHANGE",
      value: "DISCHARGING AND CREW CHANGE",
    },
    {
      label: "LOADING AND CREW CHANGE",
      value: "LOADING AND CREW CHANGE",
    },
    {
      label: "DISCHARGING,LOADING, AND CREW CHANGE",
      value: "DISCHARGING,LOADING, AND CREW CHANGE",
    },
    {
      label: "OTHERS",
      value: "OTHERS",
    },
  ];

  useEffect(() => {
    props.editArrivalDetails && setArrivalEditDetails(props.editArrivalDetails);
  }, [props.editArrivalDetails]);

  registerLocale(locales);

  const arrivalEditDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setArrivalEditDetails({ ...arrivalEditDetails, [name]: value });
  };

  const dateArrivalHandler = (date, name) => {
    setArrivalEditDetails({ ...arrivalEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setArrivalEditDetails({ ...arrivalEditDetails, ["time"]: time });
  };

  const selectChangeHandlder = (e, name) => {
    setArrivalEditDetails({ ...arrivalEditDetails, [name]: e });
  };

  return (
    <>
      {" "}
      <div
        style={{
          marginTop: "50px",
          height: "90vh",
        }}
        className="container"
      >
        <div className="row">
          <div className="col-lg-3">
            <label className="font-size">Arrival Draft FWD</label>

            <div>
              <input
                className="form-control"
                name="draft"
                value={arrivalEditDetails.draft}
                type="text"
                onChange={arrivalEditDetailHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <label className="font-size">Berth Requested Anchorage </label>

            <div>
              <input
                className="form-control"
                name="berth"
                value={arrivalEditDetails.berth}
                type="text"
                onChange={arrivalEditDetailHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <label className="font-size">Date Arrival Approximately:</label>
            <div className="input-group">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={arrivalEditDetails.date}
                onChange={(date) => dateArrivalHandler(date, "date")}
                locale={es}
                style={{ width: "400px" }}
                className="form-control"
              />
            </div>
          </div>

          <div className="col-lg-3">
            <label className="font-size">Time Arrival Approximately:</label>
            <div className="input-group">
              <TimePicker
                onChange={timeArrivalHandler}
                clockIcon={null}
                value={arrivalEditDetails.time}
                style={{ width: "100%", fontSize: "1.5rem" }}
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-lg-6">
            <label className="font-size">Cargoes Discharged</label>

            <div>
              <input
                className="form-control"
                name="discharged"
                value={arrivalEditDetails.discharged}
                type="number"
                onChange={arrivalEditDetailHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <label className="font-size">Cargoes Loaded</label>

            <div>
              <input
                className="form-control"
                name="loaded"
                value={arrivalEditDetails.loaded}
                type="number"
                onChange={arrivalEditDetailHandler}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{ marginBottom: "10px", marginTop: "10px" }}
          className="row"
        >
          <div className="col-lg-6">
            <label className="font-size">Purpose of Call</label>

            <div style={{ width: "100%" }}>
              <Select
                filterOption={createFilter({ ignoreAccents: false })}
                options={purposeCallData}
                value={arrivalEditDetails.purpose_call}
                onChange={(event) =>
                  selectChangeHandlder(event, "purpose_call")
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              marginTop: "10px",
            }}
            className="col-lg-12"
          >
            <button
              disabled={
                !arrivalEditDetails.date ||
                !arrivalEditDetails.time ||
                !arrivalEditDetails.draft ||
                !arrivalEditDetails.berth ||
                !arrivalEditDetails.discharged ||
                !arrivalEditDetails.purpose_call ||
                !arrivalEditDetails.loaded
              }
              className="btn btn-lg btn-block btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrivalDetailsTab);
