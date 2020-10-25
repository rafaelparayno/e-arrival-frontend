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
    DataList: action.BasicDetail,
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

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editDataDetails: null,
    isSuccess: true,
  });
};

const SaveEditDetailsFail = (state, action) => {
  return updateObject(state, { loadingSaving: false });
};

const closeSuccessAlert = (state, action) => {
  return updateObject(state, { isSuccess: action.CloseAlert });
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

    case actionTypes.SAVE_BASIC_INFO:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_BASIC_INFO_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_BASIC_INFO_FAIL:
      return SaveEditDetailsFail(state, action);

    case actionTypes.DELETE_BASIC_INFO:
      return DeleteEditDetailsStart(state, action);
    case actionTypes.DELETE_BASIC_INFO_SUCCESS:
      return DeleteEditDetailsSuccess(state, action);
    case actionTypes.DELETE_BASIC_INFO_FAIL:
      return DeleteEditDetailsFail(state, action);

    case actionTypes.ALERT_MODALS_DATA_DETAILS:
      return closeSuccessAlert(state, action);

    default:
      return state;
  }
};

export default reducer;
