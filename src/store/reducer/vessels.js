import { actions } from "react-table";
import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  VesselList: [],
  loadingVessels: false,
  selectedVessel: null,
  editVesselDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

//complist

const fetchVesselListStart = (state, action) => {
  return updateObject(state, { loadingVessels: true });
};

const fetchVesselListSuccess = (state, action) => {
  return updateObject(state, {
    VesselList: action.Vessel,
    loadingVessels: false,
  });
};

const fetchVesselListFail = (state, action) => {
  return updateObject(state, { loadingVessels: false });
};

const openModalEditVessels = (state, action) => {
  return updateObject(state, {
    editVesselDetails: action.data,
    isSuccess: false,
  });
};

const selectedVessels = (state, action) => {
  return updateObject(state, {
    selectedVessel: action.data,
  });
};

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editVesselDetails: null,
    isSuccess: true,
  });
};

const SaveEditDetailsFail = (state, action) => {
  return updateObject(state, { loadingSaving: false });
};

const UpdateEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const UpdateEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editVesselDetails: null,
    isSuccess: true,
  });
};

const UpdateEditDetailsFail = (state, action) => {
  return updateObject(state, { loadingSaving: false });
};

const DeleteEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingDeleting: true });
};

const DeleteEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingDeleting: false,
    isSuccess: true,
  });
};

const DeleteEditDetailsFail = (state, action) => {
  return updateObject(state, { loadingDeleting: false });
};

const closeSuccessAlert = (state, action) => {
  return updateObject(state, { isSuccess: action.CloseAlert });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VESSEL_LIST:
      return fetchVesselListStart(state, action);
    case actionTypes.FETCH_VESSEL_LIST_SUCCESS:
      return fetchVesselListSuccess(state, action);
    case actionTypes.FETCH_VESSEL_LIST_FAIL:
      return fetchVesselListFail(state, action);

    case actionTypes.SELECTED_VESSEL_DETAIL:
      return selectedVessels(state, action);

    case actionTypes.EDIT_VESSEL_DETAIL_MODAL:
      return openModalEditVessels(state, action);

    case actionTypes.SAVE_VESSELS_DETAILS:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_VESSELS_DETAILS_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_VESSELS_DETAILS_FAIL:
      return SaveEditDetailsFail(state, action);

    case actionTypes.UPDATE_VESSELS_DETAILS:
      return UpdateEditDetailsStart(state, action);
    case actionTypes.UPDATE_VESSELS_DETAILS_SUCCESS:
      return UpdateEditDetailsSuccess(state, action);
    case actionTypes.UPDATE_VESSELS_DETAILS_FAIL:
      return UpdateEditDetailsFail(state, action);

    case actionTypes.DELETE_VESSELS_DETAILS:
      return DeleteEditDetailsStart(state, action);
    case actionTypes.DELETE_VESSELS_DETAILS_SUCCESS:
      return DeleteEditDetailsSuccess(state, action);
    case actionTypes.DELETE_VESSELS_DETAILS_FAIL:
      return DeleteEditDetailsFail(state, action);

    case actionTypes.ALERT_MODALS_SHOW_VESSELS:
      return closeSuccessAlert(state, action);

    default:
      return state;
  }
};

export default reducer;
