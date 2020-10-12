import * as actionTypes from "./actionTypes";
import axios from "axios";

//Departure
// export const fetchDepartureSuccess = (Departure) => {
//   return {
//     type: actionTypes.FETCH_VESSEL_LIST_SUCCESS,
//     Departure: Departure,
//   };
// };

// export const fetchDepartureFail = (error) => {
//   return {
//     type: actionTypes.FETCH_VESSEL_LIST_FAIL,
//     error: error,
//   };
// };

// export const fetchDepartureStart = () => {
//   return {
//     type: actionTypes.FETCH_VESSEL_LIST,
//   };
// };

// export const fetchDeparture = (access_token, code, query) => {
//   return (dispatch) => {
//     dispatch(fetchDepartureStart());

//     let options = query
//       ? {
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//           },
//           params: {
//             q: query,
//           },
//         }
//       : {
//           headers: {
//             Authorization: `Bearer ${access_token}`,
//           },
//         };

//     axios
//       .post("http://localhost:5000/vessels/agent", { vessel_id: code }, options)
//       .then((res) => {
//         let fetchDeparture = {};
//         fetchDeparture = res.data;
//         dispatch(fetchDepartureSuccess(fetchDeparture));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(fetchDepartureFail(err));
//       });
//   };
// };

export const editDepartureDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_DEPARTURE_DETAIL_MODAL,
    data: data,
  };
};

//saving

export const SaveDepartureDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_DEPARTURE_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveDepartureDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_DEPARTURE_DETAILS_FAIL,
    error: error,
  };
};

export const SaveDepartureDetailStart = () => {
  return {
    type: actionTypes.SAVE_DEPARTURE_DETAILS,
  };
};

export const saveEditDetailsDeparture = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(SaveDepartureDetailStart());

    const url = "http://localhost:5000/arrivals";

    axios
      .post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let SaveDepartureDetails = "";

        if (!res.data.error) {
          SaveDepartureDetails = res.data.msg;
        } else {
          SaveDepartureDetails = "";
        }

        dispatch(SaveDepartureDetailSuccess(SaveDepartureDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(SaveDepartureDetailFail(err));
      });
  };
};

export const alertShowDeparture = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_VESSELS,
    CloseAlert: Data,
  };
};

//updating

// export const UpdateDepartureDetailSuccess = (UpdateMessage) => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS_SUCCESS,
//     saveMessage: UpdateMessage,
//   };
// };

// export const UpdateDepartureDetailFail = (error) => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS_FAIL,
//     error: error,
//   };
// };

// export const UpdateDepartureDetailStart = () => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS,
//   };
// };

// export const UpdateEditDetailsDeparture = (access_token, Datas) => {
//   return (dispatch) => {
//     dispatch(UpdateDepartureDetailStart());

//     const url = `http://localhost:5000/patch/${Datas.vessel_id}`;

//     axios
//       .patch(url, Datas, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "content-type": "application/json",
//         },
//       })
//       .then((res) => {
//         let UpdateDepartureDetails = "";

//         if (!res.data.error) {
//           UpdateDepartureDetails = res.data.msg;
//         } else {
//           UpdateDepartureDetails = "";
//         }

//         dispatch(UpdateDepartureDetailSuccess(UpdateDepartureDetails));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(UpdateDepartureDetailFail(err));
//       });
//   };
// };
// // axios.all(data.map(data=> axios.post('asdasd',data,)))

// //deleting

// export const DeleteDepartureDetailSuccess = (DeleteMessage) => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS_SUCCESS,
//     DeleteMessage: DeleteMessage,
//   };
// };

// export const DeleteDepartureDetailFail = (error) => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS_FAIL,
//     error: error,
//   };
// };

// export const DeleteDepartureDetailStart = () => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS,
//   };
// };

// export const deleteEditDetailsDeparture = (access_token, u_id) => {
//   return (dispatch) => {
//     dispatch(DeleteDepartureDetailStart());

//     const url = `http://localhost:5000/vessels/${u_id}`;

//     axios
//       .delete(url, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "content-type": "application/json",
//         },
//       })
//       .then((res) => {
//         let DeleteDepartureDetails = "";

//         if (!res.data.error) {
//           DeleteDepartureDetails = res.data.msg;
//         } else {
//           DeleteDepartureDetails = "";
//         }

//         dispatch(DeleteDepartureDetailSuccess(DeleteDepartureDetails));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(DeleteDepartureDetailFail(err));
//       });
//   };
// };
