import * as actionTypes from "./actionTypes";
import axios from "axios";

//Vessel
export const fetchVesselSuccess = (Vessel) => {
  return {
    type: actionTypes.FETCH_VESSEL_LIST_SUCCESS,
    Vessel: Vessel,
  };
};

export const fetchVesselFail = (error) => {
  return {
    type: actionTypes.FETCH_VESSEL_LIST_FAIL,
    error: error,
  };
};

export const fetchVesselStart = () => {
  return {
    type: actionTypes.FETCH_VESSEL_LIST,
  };
};

export const fetchVessel = (access_token, code, query) => {
  return (dispatch) => {
    dispatch(fetchVesselStart());

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
      .post("http://199.241.138.64/agent", { vessel_id: code }, options)
      .then((res) => {
        let fetchVessel = {};
        fetchVessel = res.data;
        dispatch(fetchVesselSuccess(fetchVessel));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchVesselFail(err));
      });
  };
};

export const editVesselDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_VESSEL_DETAIL_MODAL,
    data: data,
  };
};

export const selectedVesselDetails = (data) => {
  return {
    type: actionTypes.SELECTED_VESSEL_DETAIL,
    data: data,
  };
};

//saving

export const SaveVesselsDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_VESSELS_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveVesselsDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_VESSELS_DETAILS_FAIL,
    error: error,
  };
};

export const SaveVesselsDetailStart = () => {
  return {
    type: actionTypes.SAVE_VESSELS_DETAILS,
  };
};

export const saveEditDetailsVessel = (access_token, Datas) => {
  return async (dispatch) => {
    dispatch(SaveVesselsDetailStart());
    const url = "http://199.241.138.64/vesselinfo";

    try {
      const vessel = await axios.post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      });

      let SaveVesselsDetails = "";

      if (!vessel.data.error) {
        SaveVesselsDetails = vessel.data.msg;
      } else {
        SaveVesselsDetails = "";
      }

      dispatch(SaveVesselsDetailSuccess(SaveVesselsDetails));
      return vessel.data;
    } catch (err) {
      console.log(err);
      dispatch(SaveVesselsDetailFail(err));
    }

    // axios
    //   .post(url, Datas, {
    //     headers: {
    //       Authorization: `Bearer ${access_token}`,
    //       "content-type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     let SaveVesselsDetails = "";

    //     if (!res.data.error) {
    //       SaveVesselsDetails = res.data.msg;
    //     } else {
    //       SaveVesselsDetails = "";
    //     }

    //     dispatch(SaveVesselsDetailSuccess(SaveVesselsDetails));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch(SaveVesselsDetailFail(err));
    //   });
  };
};

export const alertShowVessels = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_VESSELS,
    CloseAlert: Data,
  };
};

//updating

export const UpdateVesselsDetailSuccess = (UpdateMessage) => {
  return {
    type: actionTypes.UPDATE_VESSELS_DETAILS_SUCCESS,
    saveMessage: UpdateMessage,
  };
};

export const UpdateVesselsDetailFail = (error) => {
  return {
    type: actionTypes.UPDATE_VESSELS_DETAILS_FAIL,
    error: error,
  };
};

export const UpdateVesselsDetailStart = () => {
  return {
    type: actionTypes.UPDATE_VESSELS_DETAILS,
  };
};

export const UpdateEditDetailsVessel = async (access_token, Datas) => {
  return (dispatch) => {
    dispatch(UpdateVesselsDetailStart());

    const url = `http://199.241.138.64/patch/${Datas.vessel_id}`;
    try {
      const vessel = axios.patch(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      });

      let UpdateVesselsDetails = "";

      if (!vessel.data.error) {
        UpdateVesselsDetails = vessel.data.msg;
      } else {
        UpdateVesselsDetails = "";
      }

      dispatch(UpdateVesselsDetailSuccess(UpdateVesselsDetails));
    } catch (err) {
      console.log(err);
      dispatch(UpdateVesselsDetailFail(err));
    }
  };
};
// axios.all(data.map(data=> axios.post('asdasd',data,)))

//deleting

export const DeleteVesselsDetailSuccess = (DeleteMessage) => {
  return {
    type: actionTypes.DELETE_VESSELS_DETAILS_SUCCESS,
    DeleteMessage: DeleteMessage,
  };
};

export const DeleteVesselsDetailFail = (error) => {
  return {
    type: actionTypes.DELETE_VESSELS_DETAILS_FAIL,
    error: error,
  };
};

export const DeleteVesselsDetailStart = () => {
  return {
    type: actionTypes.DELETE_VESSELS_DETAILS,
  };
};

export const deleteEditDetailsVessel = (access_token, u_id) => {
  return (dispatch) => {
    dispatch(DeleteVesselsDetailStart());

    const url = `http://199.241.138.64/vessels/${u_id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let DeleteVesselsDetails = "";

        if (!res.data.error) {
          DeleteVesselsDetails = res.data.msg;
        } else {
          DeleteVesselsDetails = "";
        }

        dispatch(DeleteVesselsDetailSuccess(DeleteVesselsDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(DeleteVesselsDetailFail(err));
      });
  };
};
