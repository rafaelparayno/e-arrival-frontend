import React, { useState, useEffect } from "react";

import NewVesselInfo from "./MultiStep/NewVesselInfo";
import BasicInfo from "./MultiStep/BasicInfo";
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

      // case 3: {
      //   return <Departure next={next} prev={previous} />;
      // }
      // case 4: {
      //   return <BookingInfo code={props.code} next={next} prev={previous} />;
      // }
    }
  };

  const headerNumberDetail = (stepFormProps) => {
    switch (stepFormProps) {
      case 1: {
        return `${stepFormProps}. Basic Detail`;
      }
      case 2: {
        return `${stepFormProps}. Arrival Detail`;
      }

      case 3: {
        return `${stepFormProps}. Departure Details`;
      }
      case 4: {
        return `${stepFormProps}. Booking Details`;
      }
    }
  };

  return (
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
        <h3>{headerNumberDetail(stepForm)}</h3>
      </div>
      <div style={{ padding: "5px 15px" }} className="row">
        {multistepform(stepForm)}
      </div>
    </Modal>
  );
});
export default AddDataModal;
