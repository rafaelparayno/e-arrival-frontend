import * as actionTypes from "./actionTypes";
import axios from "axios";

//CrewList
export const fetchCrewListSuccess = (CrewList) => {
  return {
    type: actionTypes.FETCH_CREW_LIST_SUCCESS,
    CrewList: CrewList,
  };
};

export const fetchCrewListFail = (error) => {
  return {
    type: actionTypes.FETCH_CREW_LIST_FAIL,
    error: error,
  };
};

export const fetchCrewListStart = () => {
  return {
    type: actionTypes.FETCH_CREW_LIST,
  };
};

export const fetchCrewList = (access_token, code, query) => {
  return (dispatch) => {
    dispatch(fetchCrewListStart());
    const data = { vessels_id: code };
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
      .post("http://localhost:5000/crews/vessel", { vessel_id: code }, options)
      .then((res) => {
        let fetchCrewList = {};
        fetchCrewList = res.data;
        dispatch(fetchCrewListSuccess(fetchCrewList));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchCrewListFail(err));
      });
  };
};

export const editCrewDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_CREW_DETAIL_MODAL,
    data: data,
  };
};
//saving

export const SaveCrewDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_CREWS_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveCrewDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_CREWS_DETAILS_FAIL,
    error: error,
  };
};

export const SaveCrewDetailStart = () => {
  return {
    type: actionTypes.SAVE_CREWS_DETAILS,
  };
};

export const saveEditDetailsCrew = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(SaveCrewDetailSuccess());

    const url = "http://localhost:5000/crews/";

    axios
      .post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let SaveCrewDetails = "";

        if (!res.data.error) {
          SaveCrewDetails = res.data.msg;
        } else {
          SaveCrewDetails = "";
        }

        dispatch(SaveCrewDetailSuccess(SaveCrewDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(SaveCrewDetailFail(err));
      });
  };
};

export const alertShowCrews = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_CREW,
    CloseAlert: Data,
  };
};
