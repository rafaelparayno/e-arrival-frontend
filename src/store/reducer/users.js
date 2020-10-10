import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingUsers: false,
  editUserDetails: null,
  // loadingNatCompany: false,
  // loadingAddressBook: false,
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

    default:
      return state;
  }
};

export default reducer;
