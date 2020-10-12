import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../../UI/Modal/Modal";
import { editShippingAgentDetailsModal } from "../../../../store/action/index";
import VesselInfo from "./MutliStep/VesselInfo";
import ArrivalInfo from "./MutliStep/ArrivalInfo";
import Departure from "./MutliStep/Departure";
import BookingInfo from "./MutliStep/BookingInfo";

import SaveButton from "../../../UI/SaveButton/SaveButton";

const ArrivingModal = React.memo((props) => {
  const [stepForm, setStepForm] = useState(0);
  const [arrivingEditDetails, setArrivingEditDetails] = useState([]);

  useEffect(() => {
    setStepForm((step) => step + 1);
  }, []);

  const editshippingAgencyDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setArrivingEditDetails({ ...arrivingEditDetails, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();
    props.save(props.userToken, arrivingEditDetails);
  };

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
            <VesselInfo prev={previous} next={next} />
          </>
        );
      }
      case 2: {
        return <ArrivalInfo prev={previous} next={next} />;
      }

      case 3: {
        return <Departure next={next} prev={previous} />;
      }
      case 4: {
        return <BookingInfo code={props.code} next={next} prev={previous} />;
      }
    }
  };

  const headerNumberDetail = (stepFormProps) => {
    switch (stepFormProps) {
      case 1: {
        return `${stepFormProps}. Vessel Detail`;
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
          <i className="fa fa-plus-square"></i>&nbsp;New Arriving Vessel
        </span>
      }
      show={props.show}
      // modalClosed={close}
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

const mapStateToProps = (state) => ({
  editShippingAgentDetails: state.ship.editShippingAgentDetails,
  loadingSaving: state.ship.loadingSaving,
  userToken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (data) => dispatch(editShippingAgentDetailsModal(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrivingModal);
