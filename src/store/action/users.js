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

//saving

export const SaveUsersDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_USERS_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveUsersDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_USERS_DETAILS_FAIL,
    error: error,
  };
};

export const SaveUsersDetailStart = () => {
  return {
    type: actionTypes.SAVE_USERS_DETAILS,
  };
};

export const saveEditDetailsUser = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(SaveUsersDetailSuccess());

    let url = "http://localhost:5000/users/add";

    axios
      .post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let SaveUsersDetails = "";

        if (!res.data.error) {
          SaveUsersDetails = res.data.msg;
        } else {
          SaveUsersDetails = "";
        }

        dispatch(SaveUsersDetailSuccess(SaveUsersDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(SaveUsersDetailFail(err));
      });
  };
};

export const alertShowUsers = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_USERS,
    CloseAlert: Data,
  };
};
