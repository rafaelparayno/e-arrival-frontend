import * as actionTypes from "./actionTypes";
import axios from "axios";

export const editDataDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_DATA_DETAILS_MODAL,
    data: data,
  };
};

export const alertShowDatas = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_DATA_DETAILS,
    CloseAlert: Data,
  };
};
