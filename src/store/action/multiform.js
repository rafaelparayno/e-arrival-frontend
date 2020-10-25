import * as actionTypes from "./actionTypes";
import axios from "axios";

export const editVesselDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_DATA_DETAILS_MODAL,
    data: data,
  };
};

export const alertShowVessels = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_DATA_DETAILS,
    CloseAlert: Data,
  };
};
