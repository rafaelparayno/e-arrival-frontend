import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  shippingAgentList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingshippingAgents: false,
  editShippingAgentDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

//complist

const fetchshippingAgentListStart = (state, action) => {
  return updateObject(state, { loadingshippingAgents: true });
};

const fetchshippingAgentListSuccess = (state, action) => {
  return updateObject(state, {
    shippingAgentList: action.ShippingAgent,
    loadingshippingAgents: false,
  });
};

const fetchshippingAgentListFail = (state, action) => {
  return updateObject(state, { loadingshippingAgents: false });
};

const openModalEditShippingAgents = (state, action) => {
  return updateObject(state, {
    editShippingAgentDetails: action.data,
    isSuccess: false,
  });
};

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editShippingAgentDetails: null,
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
    editShippingAgentDetails: null,
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
    case actionTypes.FETCH_SHIPPING_AGENT_LIST:
      return fetchshippingAgentListStart(state, action);
    case actionTypes.FETCH_SHIPPING_AGENT_LIST_SUCCESS:
      return fetchshippingAgentListSuccess(state, action);
    case actionTypes.FETCH_SHIPPING_AGENT_LIST_FAIL:
      return fetchshippingAgentListFail(state, action);

    case actionTypes.EDIT_SHIPPING_AGENT_DETAIL_MODAL:
      return openModalEditShippingAgents(state, action);

    case actionTypes.SAVE_SHIPPING_AGENTS_DETAILS:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_SHIPPING_AGENTS_DETAILS_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_SHIPPING_AGENTS_DETAILS_FAIL:
      return SaveEditDetailsFail(state, action);

    case actionTypes.UPDATE_SHIPPING_AGENTS_DETAILS:
      return UpdateEditDetailsStart(state, action);
    case actionTypes.UPDATE_SHIPPING_AGENTS_DETAILS_SUCCESS:
      return UpdateEditDetailsSuccess(state, action);
    case actionTypes.UPDATE_SHIPPING_AGENTS_DETAILS_FAIL:
      return UpdateEditDetailsFail(state, action);

    case actionTypes.DELETE_SHIPPING_AGENTS_DETAILS:
      return DeleteEditDetailsStart(state, action);
    case actionTypes.DELETE_SHIPPING_AGENTS_DETAILS_SUCCESS:
      return DeleteEditDetailsSuccess(state, action);
    case actionTypes.DELETE_SHIPPING_AGENTS_DETAILS_FAIL:
      return DeleteEditDetailsFail(state, action);

    case actionTypes.ALERT_MODALS_SHOW_SHIPPING_AGENTS:
      return closeSuccessAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
