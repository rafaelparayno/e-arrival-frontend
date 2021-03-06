import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingUsers: false,
  editUserDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

//complist

const fetchuserListStart = (state, action) => {
  return updateObject(state, { loadingUsers: true });
};

const fetchuserListSuccess = (state, action) => {
  return updateObject(state, {
    userList: action.UserList,
    loadingUsers: false,
  });
};

const fetchuserListFail = (state, action) => {
  return updateObject(state, { loadingUsers: false });
};

const openModalEditUsers = (state, action) => {
  return updateObject(state, {
    editUserDetails: action.data,
    isSuccess: false,
  });
};

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editUserDetails: null,
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
    editUserDetails: null,
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
    case actionTypes.FETCH_USER_LIST:
      return fetchuserListStart(state, action);
    case actionTypes.FETCH_USER_LIST_SUCCESS:
      return fetchuserListSuccess(state, action);
    case actionTypes.FETCH_USER_LIST_FAIL:
      return fetchuserListFail(state, action);

    case actionTypes.EDIT_USER_DETAIL_MODAL:
      return openModalEditUsers(state, action);

    case actionTypes.SAVE_USERS_DETAILS:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_USERS_DETAILS_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_USERS_DETAILS_FAIL:
      return SaveEditDetailsFail(state, action);

    case actionTypes.UPDATE_USERS_DETAILS:
      return UpdateEditDetailsStart(state, action);
    case actionTypes.UPDATE_USERS_DETAILS_SUCCESS:
      return UpdateEditDetailsSuccess(state, action);
    case actionTypes.UPDATE_USERS_DETAILS_FAIL:
      return UpdateEditDetailsFail(state, action);

    case actionTypes.DELETE_USERS_DETAILS:
      return DeleteEditDetailsStart(state, action);
    case actionTypes.DELETE_USERS_DETAILS_SUCCESS:
      return DeleteEditDetailsSuccess(state, action);
    case actionTypes.DELETE_USERS_DETAILS_FAIL:
      return DeleteEditDetailsFail(state, action);

    case actionTypes.ALERT_MODALS_SHOW_USERS:
      return closeSuccessAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
