import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../UI/Modal/Modal";
import {
  editShippingAgentDetailsModal,
  saveEditDetailsShippingAgent,
  UpdateEditDetailsUser,
} from "../../store/action/index";
import SaveButton from "../UI/SaveButton/SaveButton";

import classes from "./ShippingAgentModal.module.css";

const ShippingAgentModal = React.memo((props) => {
  const [shippingAgencyDetailEdit, setShippingAgencyDetailEdit] = useState({});
  const { close, code } = props;

  useEffect(() => {
    props.editshippingAgencyDetails &&
      setShippingAgencyDetailEdit(props.editshippingAgencyDetails);
  }, [props.editshippingAgencyDetails]);

  const editshippingAgencyDetailHandler = (e) => {
    const name = e.target.name ? e.target.name : e.target.props.name;
    const value = e.target.value;

    setShippingAgencyDetailEdit({ ...shippingAgencyDetailEdit, [name]: value });
  };

  const save = (e) => {
    e.preventDefault();
    shippingAgencyDetailEdit.id
      ? props.update(props.userToken, shippingAgencyDetailEdit)
      : props.save(props.userToken, shippingAgencyDetailEdit);
  };

  return (
    <Modal
      title={
        shippingAgencyDetailEdit.id ? (
          <span>
            <i className="fa fa-edit"></i>&nbsp;Edit Shipping Agency
          </span>
        ) : (
          <span>
            <i className="fa fa-plus-square"></i>&nbsp;New Shipping Agency
          </span>
        )
      }
      show={props.show}
      modalClosed={close}
    >
      <div className="row">
        <div className="col-lg-6">
          <label className="font-size">Agency Name</label>

          <div>
            <input
              className="form-control"
              name="shipping_agent_name"
              value={shippingAgencyDetailEdit.shipping_agent_name}
              type="text"
              onChange={editshippingAgencyDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <label className="font-size">Email </label>

          <div>
            <input
              className="form-control"
              name="e_add"
              value={shippingAgencyDetailEdit.e_add}
              type="text"
              onChange={editshippingAgencyDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-lg-6">
          <label className="font-size">Contact Person</label>

          <div>
            <input
              className="form-control"
              name="contact_person"
              value={shippingAgencyDetailEdit.contact_person}
              type="text"
              onChange={editshippingAgencyDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <label className="font-size">Contact Number</label>

          <div>
            <input
              className="form-control"
              name="contact_no"
              value={shippingAgencyDetailEdit.contact_no}
              type="text"
              onChange={editshippingAgencyDetailHandler}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ marginTop: "10px" }} className="col-lg-12">
          <SaveButton
            onClick={(e) => save(e)}
            // loading={props.loadingSaving}
            // disabled={
            //   !shippingAgencyDetailEdit.firstname ||
            //   !shippingAgencyDetailEdit.lastname ||
            //   !shippingAgencyDetailEdit.username ||
            //   !shippingAgencyDetailEdit.role_id
            // }
          />

          <button onClick={() => close()} className="btn btn-sm btn-default">
            Cancel
          </button>
        </div>
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
    save: (token, data) => dispatch(saveEditDetailsShippingAgent(token, data)),
    // update: (token, data) => dispatch(UpdateEditDetailsUser(token, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAgentModal);
