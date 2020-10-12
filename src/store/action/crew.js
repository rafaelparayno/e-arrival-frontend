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
