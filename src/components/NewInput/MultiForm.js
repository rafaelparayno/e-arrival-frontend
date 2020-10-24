import React from "react";
import classes from "./MultiForm.module.css";

const MultiForm = React.memo((props) => {
  // const multistepform = (stepFormProps) => {
  //   switch (stepFormProps) {
  //     case 1: {
  //       return (
  //         <>
  //           <VesselInfo prev={previous} next={next} />
  //         </>
  //       );
  //     }
  //     case 2: {
  //       return <ArrivalInfo prev={previous} next={next} />;
  //     }

  //     case 3: {
  //       return <Departure next={next} prev={previous} />;
  //     }
  //     case 4: {
  //       return <BookingInfo code={props.code} next={next} prev={previous} />;
  //     }
  //   }
  // };

  // const headerNumberDetail = (stepFormProps) => {
  //   switch (stepFormProps) {
  //     case 1: {
  //       return `${stepFormProps}. Vessel Detail`;
  //     }
  //     case 2: {
  //       return `${stepFormProps}. Arrival Detail`;
  //     }

  //     case 3: {
  //       return `${stepFormProps}. Departure Details`;
  //     }
  //     case 4: {
  //       return `${stepFormProps}. Booking Details`;
  //     }
  //   }
  // }

  return (
    <div className={classes.MultiForm}>
      <header>
        <h3 style={{ marginLeft: "20px" }}>Arrival Form</h3>
      </header>
      <div
        style={{
          margin: "10px 5px",
          padding: "0px 5px",
          overflow: "auto",
        }}
        className="row"
      ></div>
    </div>
  );
});

export default MultiForm;
