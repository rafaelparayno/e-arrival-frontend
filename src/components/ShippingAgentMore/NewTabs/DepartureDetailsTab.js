import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { eo, es, enUS } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const DepartureDetailsTab = (props) => {
  const [departureEditDetails, setDepartureEditDetails] = useState({});
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
        `http://199.241.138.64/departure/basic/${code}`,
        {
          headers: {
            Authorization: `Bearer ${props.userToken}`,
          },
        }
      );

      result.data &&
        setDepartureEditDetails({
          ...result.data,
          date: result.data.date && new Date(result.data.date),
        });
    };

    fetchData();
  }, []);
  //   useEffect(() => {
  //     props.editDepartureDetails &&
  //       setDepartureEditDetails(props.editDepartureDetails);
  //   }, [props.editDepartureDetails]);

  registerLocale(locales);

  const departureEditDetailsHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setDepartureEditDetails({ ...departureEditDetails, [name]: value });
  };

  const dateArrivalHandler = (date, name) => {
    setDepartureEditDetails({ ...departureEditDetails, [name]: date });
  };

  const timeArrivalHandler = (time) => {
    setDepartureEditDetails({ ...departureEditDetails, ["time"]: time });
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
            <label className="font-size">Departure Date :</label>
            <div className="input-group">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={departureEditDetails.date}
                onChange={(date) => dateArrivalHandler(date, "date")}
                locale={es}
                style={{ width: "400px" }}
                className="form-control"
              />
            </div>
          </div>

          <div className="col-lg-2">
            <label className="font-size">Time Departure:</label>
            <div className="input-group">
              <TimePicker
                onChange={timeArrivalHandler}
                clockIcon={null}
                value={departureEditDetails.time}
                style={{ width: "100%", fontSize: "1.5rem" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <label className="font-size">Next Port of call</label>

            <div>
              <input
                className="form-control"
                name="portcall"
                value={departureEditDetails.portcall}
                type="text"
                onChange={departureEditDetailsHandler}
                style={{ width: "100%" }}
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
                !departureEditDetails.date ||
                !departureEditDetails.time ||
                !departureEditDetails.portcall
              }
              //onClick={(e) => goToFourth()}
              className="btn btn-md btn-block btn-primary"
            >
              save
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartureDetailsTab);
