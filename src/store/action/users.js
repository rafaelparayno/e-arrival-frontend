import * as actionTypes from "./actionTypes";
import axios from "axios";

//UserList
export const fetchUserListSuccess = (UserList) => {
  return {
    type: actionTypes.FETCH_USER_LIST_SUCCESS,
    UserList: UserList,
  };
};

export const fetchUserListFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_LIST_FAIL,
    error: error,
  };
};

export const fetchUserListStart = () => {
  return {
    type: actionTypes.FETCH_USER_LIST,
  };
};

export const fetchUserList = (access_token, query) => {
  return (dispatch) => {
    dispatch(fetchUserListStart());

    let options = query
      ? {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          params: {
            q: query,
          },
        }
      : {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        };

    axios
      .get("http://localhost:5000/users", options)
      .then((res) => {
        let fetchUserList = {};
        fetchUserList = res.data;
        dispatch(fetchUserListSuccess(fetchUserList));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserListFail(err));
      });
  };
};

export const editUserDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_USER_DETAIL_MODAL,
    data: data,
  };
};

//UserList

// //Companynat
// export const fetchCompanyNatureListSuccess = (companyNatlist) => {
//     return {
//         type: actionTypes.FETCH_COMPANY_NATURE_LIST_SUCCESS,
//         companyNatlist: companyNatlist
//     };
// };

// export const fetchCompanyNatureListFail = (error) => {
//     return {
//         type: actionTypes.FETCH_COMPANY_NATURE_LIST_FAIL,
//         error: error
//     };
// };

// export const fetchCompanyNatureListStart = () => {
//     return {
//         type: actionTypes.FETCH_COMPANY_NATURE_LIST
//     };
// };

// export const fetchCompanyNatlist = () => {
//     return dispatch => {
//         dispatch(fetchCompanyNatureListStart());

//         axios.get('/params.php', {
//             params: {
//                 p: 'cmp_nature'
//             },
//         })
//             .then(res => {
//                 let fetchCompanyNatList = {};
//                 fetchCompanyNatList = res.data;
//                 dispatch(fetchCompanyNatureListSuccess(fetchCompanyNatList));
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch(fetchCompanyNatureListFail(err));
//             });
//     };
// };

// //Companynat

// //Address Book List

// export const fetchAddressBookSuccess = (addressBook) => {
//     return {
//         type: actionTypes.FETCH_ADDRESS_BOOK_SUCCESS,
//         addressBook: addressBook
//     };
// };

// export const fetchAddressBookFail = (error) => {
//     return {
//         type: actionTypes.FETCH_ADDRESS_BOOK_FAIL,
//         error: error
//     };
// };

// export const fetchAddressBookStart = () => {
//     return {
//         type: actionTypes.FETCH_ADDRESS_BOOK
//     };
// };

// export const fetchAddressBook = (data) => {
//     return dispatch => {
//         dispatch(fetchAddressBookStart());

//         const formData = new FormData();
//         if (data.company) {
//             formData.set('company', data.company);
//         } else {
//             formData.set('company', "");
//         }
//         if (data.nature) {
//             formData.set('nature', data.nature);
//         } else {
//             formData.set('nature', "");
//         }

//         axios.post('/company.php?p=display', formData)
//             .then(res => {
//                 let fetchAddressBook = {};
//                 if (!res.data.error) {
//                     fetchAddressBook = res.data;
//                 } else {
//                     fetchAddressBook = [];
//                 }

//                 dispatch(fetchAddressBookSuccess(fetchAddressBook));
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch(fetchAddressBookFail(err));
//             });
//     };
// };
