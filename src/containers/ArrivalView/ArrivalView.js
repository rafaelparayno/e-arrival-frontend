import React from "react";
import ArrivalGrid from "../../components/Arrivals/ArrivalsGrid";
import CurrentDateTick from "../../components/Arrivals/CurrentDateTick";

const ArrivalView = () => {
  return (
    <main>
      <CurrentDateTick />
      &nbsp;
      <ArrivalGrid />
    </main>
  );
};

export default ArrivalView;
