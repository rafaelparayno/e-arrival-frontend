import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  CrewList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingCrews: false,
  editCrewDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

//complist

const fetchCrewListStart = (state, action) => {
  return updateObject(state, { loadingCrews: true });
};

const fetchCrewListSuccess = (state, action) => {
  return updateObject(state, {
    CrewList: action.CrewList,
    loadingCrews: false,
  });
};

const fetchCrewListFail = (state, action) => {
  return updateObject(state, { loadingCrews: false });
};

const openModalEditCrews = (state, action) => {
  return updateObject(state, {
    editCrewDetails: action.data,
    isSuccess: false,
  });
};

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editCrewDetails: null,
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
    editCrewDetails: null,
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
    case actionTypes.FETCH_CREW_LIST:
      return fetchCrewListStart(state, action);
    case actionTypes.FETCH_CREW_LIST_SUCCESS:
      return fetchCrewListSuccess(state, action);
    case actionTypes.FETCH_CREW_LIST_FAIL:
      return fetchCrewListFail(state, action);

    case actionTypes.EDIT_CREW_DETAIL_MODAL:
      return openModalEditCrews(state, action);

    case actionTypes.SAVE_CREWS_DETAILS:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_CREWS_DETAILS_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_CREWS_DETAILS_FAIL:
      return SaveEditDetailsFail(state, action);

    case actionTypes.UPDATE_CREWS_DETAILS:
      return UpdateEditDetailsStart(state, action);
    case actionTypes.UPDATE_CREWS_DETAILS_SUCCESS:
      return UpdateEditDetailsSuccess(state, action);
    case actionTypes.UPDATE_CREWS_DETAILS_FAIL:
      return UpdateEditDetailsFail(state, action);

    case actionTypes.DELETE_CREWS_DETAILS:
      return DeleteEditDetailsStart(state, action);
    case actionTypes.DELETE_CREWS_DETAILS_SUCCESS:
      return DeleteEditDetailsSuccess(state, action);
    case actionTypes.DELETE_CREWS_DETAILS_FAIL:
      return DeleteEditDetailsFail(state, action);

    case actionTypes.ALERT_MODALS_SHOW_CREW:
      return closeSuccessAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
