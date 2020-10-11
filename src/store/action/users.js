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

    const url = "http://localhost:5000/users/add";

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

//updating

export const UpdateUsersDetailSuccess = (UpdateMessage) => {
  return {
    type: actionTypes.UPDATE_USERS_DETAILS_SUCCESS,
    UpdateMessage: UpdateMessage,
  };
};

export const UpdateUsersDetailFail = (error) => {
  return {
    type: actionTypes.UPDATE_USERS_DETAILS_FAIL,
    error: error,
  };
};

export const UpdateUsersDetailStart = () => {
  return {
    type: actionTypes.UPDATE_USERS_DETAILS,
  };
};

export const UpdateEditDetailsUser = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(UpdateUsersDetailStart());

    const url = `http://localhost:5000/users/${Datas.u_id}`;

    axios
      .patch(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let UpdateUsersDetails = "";

        if (!res.data.error) {
          UpdateUsersDetails = res.data.msg;
        } else {
          UpdateUsersDetails = "";
        }

        dispatch(UpdateUsersDetailSuccess(UpdateUsersDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(UpdateUsersDetailFail(err));
      });
  };
};
// axios.all(data.map(data=> axios.post('asdasd',data,)))

//deleting

export const DeleteUsersDetailSuccess = (DeleteMessage) => {
  return {
    type: actionTypes.DELETE_USERS_DETAILS_SUCCESS,
    DeleteMessage: DeleteMessage,
  };
};

export const DeleteUsersDetailFail = (error) => {
  return {
    type: actionTypes.DELETE_USERS_DETAILS_FAIL,
    error: error,
  };
};

export const DeleteUsersDetailStart = () => {
  return {
    type: actionTypes.DELETE_USERS_DETAILS,
  };
};

export const deleteEditDetailsUser = (access_token, u_id) => {
  return (dispatch) => {
    dispatch(DeleteUsersDetailStart());

    const url = `http://localhost:5000/users/${u_id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let DeleteUsersDetails = "";

        if (!res.data.error) {
          DeleteUsersDetails = res.data.msg;
        } else {
          DeleteUsersDetails = "";
        }

        dispatch(DeleteUsersDetailSuccess(DeleteUsersDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(DeleteUsersDetailFail(err));
      });
  };
};
