import React, { useState, useEffect } from "react";

import NewVesselInfo from "./MultiStep/NewVesselInfo";
import BasicInfo from "./MultiStep/BasicInfo";
import NewArrivalInfo from "./MultiStep/NewArrivalInfo";
import NewCrewInfo from "./MultiStep/NewCrewInfo";
import NewDeparture from "./MultiStep/NewDeparture";
import NewBookingInfo from "./MultiStep/NewBookingInfo";
import NewCrewNameDetails from "./MultiStep/NewCrewNameDetails";
import Modal from "../UI/Modal/Modal";

const AddDataModal = React.memo((props) => {
  const { close } = props;

  const [stepForm, setStepForm] = useState(0);

  useEffect(() => {
    setStepForm((step) => step + 1);
  }, []);

  const next = () => {
    setStepForm((step) => step + 1);
  };

  const previous = () => {
    setStepForm((step) => step - 1);
  };

  const multistepform = (stepFormProps) => {
    switch (stepFormProps) {
      case 1: {
        return (
          <>
            <BasicInfo prev={previous} next={next} />
          </>
        );
      }
      case 2: {
        return <NewVesselInfo prev={previous} next={next} />;
      }

      case 3: {
        return <NewArrivalInfo next={next} prev={previous} />;
      }
      case 4: {
        return <NewCrewInfo code={props.code} next={next} prev={previous} />;
      }
      case 5: {
        return (
          <NewCrewNameDetails code={props.code} next={next} prev={previous} />
        );
      }
      case 6: {
        return <NewDeparture code={props.code} next={next} prev={previous} />;
      }
      case 7: {
        return <NewBookingInfo code={props.code} next={next} prev={previous} />;
      }
    }
  };

  const headerNumberDetail = (stepFormProps) => {
    switch (stepFormProps) {
      case 1: {
        return `${stepFormProps}. Basic Detail`;
      }
      case 2: {
        return `${stepFormProps}. Vessel Detail`;
      }

      case 3: {
        return `${stepFormProps}. Arrival Details`;
      }
      case 4: {
        return `${stepFormProps}. Crew Details`;
      }
      case 5: {
        return `${stepFormProps}. Departure Details`;
      }
      case 6: {
        return `${stepFormProps}. Booking Details`;
      }
    }
  };

  return (
    <>
      <Modal
        title={
          <span>
            <i className="fa fa-plus-square"></i>&nbsp;Add Data
          </span>
        }
        show={props.show}
        modalClosed={close}
      >
        <div style={{ padding: "5px 15px" }} className="row">
          {stepForm !== 5 && <h3>{headerNumberDetail(stepForm)}</h3>}
        </div>
        <div style={{ padding: "5px 15px" }} className="row">
          <h3>
            Required <span style={{ color: "red" }}>*</span>
          </h3>
        </div>
        <div style={{ padding: "5px 15px" }} className="row">
          {multistepform(stepForm)}
        </div>
      </Modal>
    </>
  );
});
export default AddDataModal;
