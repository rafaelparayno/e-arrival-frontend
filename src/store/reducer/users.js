import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  userList: [],
  // companyNatureList: [],
  // addressBook: [],

  loadingUsers: false,
  // loadingNatCompany: false,
  // loadingAddressBook: false,
};

//complist

const fetchuserListStart = (state, action) => {
  return updateObject(state, { loadingUsers: true });
};

const fetchuserListSuccess = (state, action) => {
  return updateObject(state, {
    userList: action.userList,
    loadingUsers: false,
  });
};

const fetchuserListFail = (state, action) => {
  return updateObject(state, { loadingUsers: false });
};

// //complist

// //Compnat

// const fetchCompanyNatListStart = (state, action) => {
//     return updateObject(state, { loadingNatCompany: true });
// };

// const fetchCompanyNatListSuccess = (state, action) => {
//     return updateObject(state, {
//         companyNatureList: action.companyNatlist,
//         loadingNatCompany: false
//     });
// };

// const fetchCompanyNatListFail = (state, action) => {
//     return updateObject(state, { loadingNatCompany: false });
// };

// //Compnat

// //addressbook

// const fetchAddressBookStart = (state, action) => {
//     return updateObject(state, { loadingAddressBook: true });
// };

// const fetchAddressBookSuccess = (state, action) => {
//     return updateObject(state, {
//         addressBook: action.addressBook,
//         loadingAddressBook: false
//     });
// };

// const fetchAddressBookFail = (state, action) => {
//     return updateObject(state, { loadingAddressBook: false });
// };

// //addressbook

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_LIST:
      return fetchuserListStart(state, action);
    case actionTypes.FETCH_USER_LIST_SUCCESS:
      return fetchuserListSuccess(state, action);
    case actionTypes.FETCH_USER_LIST_FAIL:
      return fetchuserListFail(state, action);
    // case actionTypes.FETCH_COMPANY_NATURE_LIST: return fetchCompanyNatListStart(state, action);
    // case actionTypes.FETCH_COMPANY_NATURE_LIST_SUCCESS: return fetchCompanyNatListSuccess(state, action);
    // case actionTypes.FETCH_COMPANY_NATURE_LIST_FAIL: return fetchCompanyNatListFail(state, action);
    // //country
    // // case actionTypes.FETCH_COUNTRY_LIST: return fetchCountryStart(state, action);
    // // case actionTypes.FETCH_COUNTRY_LIST_SUCCESS: return fetchCountrySuccess(state, action);
    // // case actionTypes.FETCH_COUNTRY_LIST_FAIL: return fetchCountryFail(state, action);
    // //country
    // case actionTypes.FETCH_ADDRESS_BOOK: return fetchAddressBookStart(state, action);
    // case actionTypes.FETCH_ADDRESS_BOOK_SUCCESS: return fetchAddressBookSuccess(state, action);
    // case actionTypes.FETCH_ADDRESS_BOOK_FAIL: return fetchAddressBookFail(state, action);
    default:
      return state;
  }
};

export default reducer;
