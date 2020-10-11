import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../../UI/Modal/Modal";
import { editShippingAgentDetailsModal } from "../../../../store/action/index";
import VesselInfo from "./MutliStep/VesselInfo";
import ArrivalInfo from "./MutliStep/ArrivalInfo";

import SaveButton from "../../../UI/SaveButton/SaveButton";

const ArrivingModal = React.memo((props) => {
  const [stepForm, setStepForm] = useState(0);
  const [arrivingEditDetails, setArrivingEditDetails] = useState([]);
  const { close, code } = props;

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
            <VesselInfo
              details={arrivingEditDetails}
              handler={editshippingAgencyDetailHandler}
              prev={previous}
              next={next}
            />
          </>
        );
      }
      case 2: {
        return (
          <ArrivalInfo
            details={arrivingEditDetails}
            handler={editshippingAgencyDetailHandler}
            prev={previous}
            next={next}
          />
        );
      }

      case 3: {
        return (
          <div
            details={arrivingEditDetails}
            handler={editshippingAgencyDetailHandler}
            prev={previous}
          >
            3
          </div>
        );
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
      modalClosed={close}
    >
      <div style={{ padding: "5px 15px" }} className="row">
        <h3>
          {" "}
          {stepForm}. {stepForm === 1 ? " Vessel Detail" : " Arrival Detail"}
        </h3>
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
