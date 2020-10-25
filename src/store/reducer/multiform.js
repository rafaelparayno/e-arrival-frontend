import { actions } from "react-table";
import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  DataList: [],
  loadingDatas: false,
  editDataDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

const fetchDataListStart = (state, action) => {
  return updateObject(state, { loadingDatas: true });
};

const fetchDataListSuccess = (state, action) => {
  return updateObject(state, {
    DataList: action.Data,
    loadingDatas: false,
  });
};

const fetchDataListFail = (state, action) => {
  return updateObject(state, { loadingDatas: false });
};

const openModalEditDatas = (state, action) => {
  return updateObject(state, {
    editDataDetails: action.data,
    isSuccess: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATAS_LIST:
      return fetchDataListStart(state, action);
    case actionTypes.FETCH_DATAS_LIST_SUCCESS:
      return fetchDataListSuccess(state, action);
    case actionTypes.FETCH_DATAS_LIST_FAIL:
      return fetchDataListFail(state, action);

    case actionTypes.EDIT_DATA_DETAILS_MODAL:
      return openModalEditDatas(state, action);

    // case actionTypes.ALERT_MODALS_DATA_DETAILS:
    //   return closeSuccessAlert(state, action);

    default:
      return state;
  }
};

export default reducer;
