import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  DepartureList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingDepartures: false,
  editDepartureDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

//complist

// const fetchDepartureListStart = (state, action) => {
//   return updateObject(state, { loadingDepartures: true });
// };

// const fetchDepartureListSuccess = (state, action) => {
//   return updateObject(state, {
//     DepartureList: action.Departure,
//     loadingDepartures: false,
//   });
// };

// const fetchDepartureListFail = (state, action) => {
//   return updateObject(state, { loadingDepartures: false });
// };

const openModalEditDepartures = (state, action) => {
  return updateObject(state, {
    editDepartureDetails: action.data,
    isSuccess: false,
  });
};

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editDepartureDetails: null,
    isSuccess: true,
  });
};

const SaveEditDetailsFail = (state, action) => {
  return updateObject(state, { loadingSaving: false });
};

// const UpdateEditDetailsStart = (state, action) => {
//   return updateObject(state, { loadingSaving: true });
// };

// const UpdateEditDetailsSuccess = (state, action) => {
//   return updateObject(state, {
//     loadingSaving: false,
//     editDepartureDetails: null,
//     isSuccess: true,
//   });
// };

// const UpdateEditDetailsFail = (state, action) => {
//   return updateObject(state, { loadingSaving: false });
// };

// const DeleteEditDetailsStart = (state, action) => {
//   return updateObject(state, { loadingDeleting: true });
// };

// const DeleteEditDetailsSuccess = (state, action) => {
//   return updateObject(state, {
//     loadingDeleting: false,
//     isSuccess: true,
//   });
// };

// const DeleteEditDetailsFail = (state, action) => {
//   return updateObject(state, { loadingDeleting: false });
// };

// const closeSuccessAlert = (state, action) => {
//   return updateObject(state, { isSuccess: action.CloseAlert });
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_VESSEL_LIST:
    //   return fetchDepartureListStart(state, action);
    // case actionTypes.FETCH_VESSEL_LIST_SUCCESS:
    //   return fetchDepartureListSuccess(state, action);
    // case actionTypes.FETCH_VESSEL_LIST_FAIL:
    //   return fetchDepartureListFail(state, action);

    case actionTypes.EDIT_DEPARTURE_DETAIL_MODAL:
      return openModalEditDepartures(state, action);

    case actionTypes.SAVE_DEPARTURE_DETAILS:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_DEPARTURE_DETAILS_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_DEPARTURE_DETAILS_FAIL:
      return SaveEditDetailsFail(state, action);

    // case actionTypes.UPDATE_VESSELS_DETAILS:
    //   return UpdateEditDetailsStart(state, action);
    // case actionTypes.UPDATE_VESSELS_DETAILS_SUCCESS:
    //   return UpdateEditDetailsSuccess(state, action);
    // case actionTypes.UPDATE_VESSELS_DETAILS_FAIL:
    //   return UpdateEditDetailsFail(state, action);

    // case actionTypes.DELETE_VESSELS_DETAILS:
    //   return DeleteEditDetailsStart(state, action);
    // case actionTypes.DELETE_VESSELS_DETAILS_SUCCESS:
    //   return DeleteEditDetailsSuccess(state, action);
    // case actionTypes.DELETE_VESSELS_DETAILS_FAIL:
    //   return DeleteEditDetailsFail(state, action);

    // case actionTypes.ALERT_MODALS_SHOW_VESSELS:
    //   return closeSuccessAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
