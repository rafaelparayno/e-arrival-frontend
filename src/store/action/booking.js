import * as actionTypes from "./actionTypes";
import axios from "axios";

//Booking
export const fetchBookingSuccess = (Booking) => {
  return {
    type: actionTypes.FETCH_BOOKING_LIST_SUCCESS,
    Booking: Booking,
  };
};

export const fetchBookingFail = (error) => {
  return {
    type: actionTypes.FETCH_BOOKING_LIST_FAIL,
    error: error,
  };
};

export const fetchBookingStart = () => {
  return {
    type: actionTypes.FETCH_BOOKING_LIST,
  };
};

export const fetchBooking = (access_token, code) => {
  return async (dispatch) => {
    dispatch(fetchBookingStart());
    try {
      const bookingData = await axios.post(
        "http://199.241.138.64/vessel",
        { shipping_id: code },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      let fetchBooking = {};
      fetchBooking = bookingData.data;
      dispatch(fetchBookingSuccess(fetchBooking));

      return fetchBooking;
    } catch (err) {
      console.log(err);
      dispatch(fetchBookingFail(err));
    }

    // axios
    //   .post(
    //     "/bookings/vessel",
    //     { shipping_id: code },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     let fetchBooking = {};
    //     fetchBooking = res.data;
    //     dispatch(fetchBookingSuccess(fetchBooking));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch(fetchBookingFail(err));
    //   });
  };
};

export const editBookingDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_BOOKING_DETAIL_MODAL,
    data: data,
  };
};

//saving

export const SaveBookingDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_BOOKING_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveBookingDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_BOOKING_DETAILS_FAIL,
    error: error,
  };
};

export const SaveBookingDetailStart = () => {
  return {
    type: actionTypes.SAVE_BOOKING_DETAILS,
  };
};

export const saveEditDetailsBooking = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(SaveBookingDetailStart());

    const url = "http://199.241.138.64/bookings";

    axios
      .post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let SaveBookingDetails = "";

        if (!res.data.error) {
          SaveBookingDetails = res.data.msg;
        } else {
          SaveBookingDetails = "";
        }

        dispatch(SaveBookingDetailSuccess(SaveBookingDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(SaveBookingDetailFail(err));
      });
  };
};

export const alertShowBooking = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_VESSELS,
    CloseAlert: Data,
  };
};

//updating

// export const UpdateBookingDetailSuccess = (UpdateMessage) => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS_SUCCESS,
//     saveMessage: UpdateMessage,
//   };
// };

// export const UpdateBookingDetailFail = (error) => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS_FAIL,
//     error: error,
//   };
// };

// export const UpdateBookingDetailStart = () => {
//   return {
//     type: actionTypes.UPDATE_VESSELS_DETAILS,
//   };
// };

// export const UpdateEditDetailsBooking = (access_token, Datas) => {
//   return (dispatch) => {
//     dispatch(UpdateBookingDetailStart());

//     const url = `http://localhost:5000/patch/${Datas.vessel_id}`;

//     axios
//       .patch(url, Datas, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "content-type": "application/json",
//         },
//       })
//       .then((res) => {
//         let UpdateBookingDetails = "";

//         if (!res.data.error) {
//           UpdateBookingDetails = res.data.msg;
//         } else {
//           UpdateBookingDetails = "";
//         }

//         dispatch(UpdateBookingDetailSuccess(UpdateBookingDetails));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(UpdateBookingDetailFail(err));
//       });
//   };
// };
// // axios.all(data.map(data=> axios.post('asdasd',data,)))

// //deleting

// export const DeleteBookingDetailSuccess = (DeleteMessage) => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS_SUCCESS,
//     DeleteMessage: DeleteMessage,
//   };
// };

// export const DeleteBookingDetailFail = (error) => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS_FAIL,
//     error: error,
//   };
// };

// export const DeleteBookingDetailStart = () => {
//   return {
//     type: actionTypes.DELETE_VESSELS_DETAILS,
//   };
// };

// export const deleteEditDetailsBooking = (access_token, u_id) => {
//   return (dispatch) => {
//     dispatch(DeleteBookingDetailStart());

//     const url = `http://localhost:5000/vessels/${u_id}`;

//     axios
//       .delete(url, {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//           "content-type": "application/json",
//         },
//       })
//       .then((res) => {
//         let DeleteBookingDetails = "";

//         if (!res.data.error) {
//           DeleteBookingDetails = res.data.msg;
//         } else {
//           DeleteBookingDetails = "";
//         }

//         dispatch(DeleteBookingDetailSuccess(DeleteBookingDetails));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(DeleteBookingDetailFail(err));
//       });
//   };
// };
