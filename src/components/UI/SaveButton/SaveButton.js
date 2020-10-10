import React from "react";

const SaveButton = (props) => {
  return (
    <button
      title={props.title ? props.title : "Save changes"}
      className={props.className ? props.className : "btn btn-sm btn-primary"}
      onClick={props.onClick}
      disabled={props.loading || (props.disabled ? props.disabled : false)}
      type={props.type}
      style={props.style}
    >
      {props.loading ? (
        <>
          <i className="fa fa-spinner fa-spin"></i>&nbsp;
          {props.loadingText ? props.loadingText : "Saving..."}
        </>
      ) : props.content ? (
        props.content
      ) : (
        <>
          <i className="fa fa-save" aria-hidden="true"></i>&nbsp;Save
        </>
      )}
    </button>
  );
};

export default SaveButton;
