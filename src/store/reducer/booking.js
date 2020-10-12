import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  BookingList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingBookings: false,
  editBookingDetails: null,
  loadingSaving: false,
  loadingDeleting: false,
  isSuccess: false,
};

//complist

const fetchBookingListStart = (state, action) => {
  return updateObject(state, { loadingBookings: true });
};

const fetchBookingListSuccess = (state, action) => {
  return updateObject(state, {
    BookingList: action.Booking,
    loadingBookings: false,
  });
};

const fetchBookingListFail = (state, action) => {
  return updateObject(state, { loadingBookings: false });
};

const openModalEditBookings = (state, action) => {
  return updateObject(state, {
    editBookingDetails: action.data,
    isSuccess: false,
  });
};

const SaveEditDetailsStart = (state, action) => {
  return updateObject(state, { loadingSaving: true });
};

const SaveEditDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loadingSaving: false,
    editBookingDetails: null,
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
//     editBookingDetails: null,
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
    case actionTypes.FETCH_BOOKING_LIST:
      return fetchBookingListStart(state, action);
    case actionTypes.FETCH_BOOKING_LIST_SUCCESS:
      return fetchBookingListSuccess(state, action);
    case actionTypes.FETCH_BOOKING_LIST_FAIL:
      return fetchBookingListFail(state, action);

    case actionTypes.EDIT_BOOKING_DETAIL_MODAL:
      return openModalEditBookings(state, action);

    case actionTypes.SAVE_BOOKING_DETAILS:
      return SaveEditDetailsStart(state, action);
    case actionTypes.SAVE_BOOKING_DETAILS_SUCCESS:
      return SaveEditDetailsSuccess(state, action);
    case actionTypes.SAVE_BOOKING_DETAILS_FAIL:
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
