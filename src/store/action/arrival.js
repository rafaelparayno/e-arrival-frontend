import * as actionTypes from "./actionTypes";
import axios from "axios";

//Arrival
export const fetchArrivalSuccess = (Arrival) => {
  return {
    type: actionTypes.FETCH_ARRIVAL_LIST_SUCCESS,
    Arrival: Arrival,
  };
};

export const fetchArrivalFail = (error) => {
  return {
    type: actionTypes.FETCH_ARRIVAL_LIST_FAIL,
    error: error,
  };
};

export const fetchArrivalStart = () => {
  return {
    type: actionTypes.FETCH_ARRIVAL_LIST,
  };
};

export const fetchArrival = (access_token, code) => {
  return async (dispatch) => {
    dispatch(fetchArrivalStart());
    try {
      let arrivalData = await axios.post(
        "http://199.241.138.64/arrivals/vessel",
        { shipping_id: code },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      let fetchArrival = {};
      fetchArrival = arrivalData.data;
      dispatch(fetchArrivalSuccess(fetchArrival));

      return fetchArrival;
    } catch (err) {
      console.log(err);
      dispatch(fetchArrivalFail(err));
    }
    // axios
    //   .post(
    //     "/arrivals/vessel",
    //     { shipping_id: code },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     let fetchArrival = {};
    //     fetchArrival = res.data;
    //     dispatch(fetchArrivalSuccess(fetchArrival));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch(fetchArrivalFail(err));
    //   });
  };
};

export const editArrivalDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_ARRIVAL_DETAIL_MODAL,
    data: data,
  };
};

//saving

export const SaveArrivalDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_ARRIVAL_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveArrivalDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_ARRIVAL_DETAILS_FAIL,
    error: error,
  };
};

export const SaveArrivalDetailStart = () => {
  return {
    type: actionTypes.SAVE_ARRIVAL_DETAILS,
  };
};

export const saveEditDetailsArrival = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(SaveArrivalDetailStart());

    const url = "http://199.241.138.64/arrivals";

    axios
      .post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let SaveArrivalDetails = "";

        if (!res.data.error) {
          SaveArrivalDetails = res.data.msg;
        } else {
          SaveArrivalDetails = "";
        }

        dispatch(SaveArrivalDetailSuccess(SaveArrivalDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(SaveArrivalDetailFail(err));
      });
  };
};

export const alertShowArrival = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_VESSELS,
    CloseAlert: Data,
  };
};

//updating

// export const UpdateArrivalDetailSuccess = (UpdateMessage) => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS_SUCCESS,
//     saveMessage: UpdateMessage,
//   };
// };

// export const UpdateArrivalDetailFail = (error) => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS_FAIL,
//     error: error,
//   };
// };

// export const UpdateArrivalDetailStart = () => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS,
//   };
// };

// export const UpdateEditDetailsArrival = (access_token, Datas) => {
//   return (dispatch) => {
//     dispatch(UpdateArrivalDetailStart());

//     const url = `http://localhost:5000/patch/${Datas.vessel_id}`;

//     axios
//       .patch(url, Datas, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "content-type": "application/json",
//         },
//       })
//       .then((res) => {
//         let UpdateArrivalDetails = "";

//         if (!res.data.error) {
//           UpdateArrivalDetails = res.data.msg;
//         } else {
//           UpdateArrivalDetails = "";
//         }

//         dispatch(UpdateArrivalDetailSuccess(UpdateArrivalDetails));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(UpdateArrivalDetailFail(err));
//       });
//   };
// };
// // axios.all(data.map(data=> axios.post('asdasd',data,)))

// //deleting

// export const DeleteArrivalDetailSuccess = (DeleteMessage) => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS_SUCCESS,
//     DeleteMessage: DeleteMessage,
//   };
// };

// export const DeleteArrivalDetailFail = (error) => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS_FAIL,
//     error: error,
//   };
// };

// export const DeleteArrivalDetailStart = () => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS,
//   };
// };

// export const deleteEditDetailsArrival = (access_token, u_id) => {
//   return (dispatch) => {
//     dispatch(DeleteArrivalDetailStart());

//     const url = `http://localhost:5000/vessels/${u_id}`;

//     axios
//       .delete(url, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "content-type": "application/json",
//         },
//       })
//       .then((res) => {
//         let DeleteArrivalDetails = "";

//         if (!res.data.error) {
//           DeleteArrivalDetails = res.data.msg;
//         } else {
//           DeleteArrivalDetails = "";
//         }

//         dispatch(DeleteArrivalDetailSuccess(DeleteArrivalDetails));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(DeleteArrivalDetailFail(err));
//       });
//   };
// };
