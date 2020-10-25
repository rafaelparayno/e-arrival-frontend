import React from "react";
import Modal from "../UI/Modal/Modal";

const AddDataModal = React.memo((props) => {
  const { close } = props;

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
      {/* <div style={{ padding: "5px 15px" }} className="row">
        <h3>{headerNumberDetail(stepForm)}</h3>
      </div>
      <div style={{ padding: "5px 15px" }} className="row">
        {multistepform(stepForm)}
      </div> */}
    </Modal>
  );
});
export default AddDataModal;
