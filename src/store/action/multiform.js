import * as actionTypes from "./actionTypes";
import axios from "axios";

export const editDataDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_DATA_DETAILS_MODAL,
    data: data,
  };
};

export const alertShowDatas = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_DATA_DETAILS,
    CloseAlert: Data,
  };
};

export const SaveBasicDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_BASIC_INFO_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveBasicDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_BASIC_INFO_FAIL,
    error: error,
  };
};

export const SaveBasicDetailStart = () => {
  return {
    type: actionTypes.SAVE_BASIC_INFO,
  };
};

export const saveEditBasicDetail = (access_token, Datas) => {
  return async (dispatch) => {
    dispatch(SaveBasicDetailStart());
    const url = "http://199.241.138.64/basicinfo";

    try {
      const basicinfo = await axios.post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      });

      let SaveBasicInfo = "";

      if (!basicinfo.data.error) {
        SaveBasicInfo = basicinfo.data.msg;
      } else {
        SaveBasicInfo = "";
      }

      dispatch(SaveBasicDetailSuccess(SaveBasicInfo));
      return basicinfo.data;
    } catch (err) {
      console.log(err);
      dispatch(SaveBasicDetailFail(err));
    }
  };
};

export const fetchBasicDetailSuccess = (BasicDetail) => {
  return {
    type: actionTypes.FETCH_DATAS_LIST_SUCCESS,
    BasicDetail: BasicDetail,
  };
};

export const fetchBasicDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_DATAS_LIST_FAIL,
    error: error,
  };
};

export const fetchBasicDetailStart = () => {
  return {
    type: actionTypes.FETCH_DATAS_LIST,
  };
};

export const fetchBasicDetail = (access_token, query) => {
  return (dispatch) => {
    dispatch(fetchBasicDetailStart());

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
      .get("http://199.241.138.64/basicinfo", options)
      .then((res) => {
        let fetchDataList = [];
        fetchDataList = res.data;
        dispatch(fetchBasicDetailSuccess(fetchDataList));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchBasicDetailFail(err));
      });
  };
};

export const DeleteBasicDetailSuccess = (DeleteMessage) => {
  return {
    type: actionTypes.DELETE_BASIC_INFO_SUCCESS,
    DeleteMessage: DeleteMessage,
  };
};

export const DeleteBasicDetailFail = (error) => {
  return {
    type: actionTypes.DELETE_BASIC_INFO_FAIL,
    error: error,
  };
};

export const DeleteBasicDetailStart = () => {
  return {
    type: actionTypes.DELETE_BASIC_INFO,
  };
};

export const deleteEditDetailsBasic = (access_token, id) => {
  return (dispatch) => {
    dispatch(DeleteBasicDetailStart());

    const url = `http://199.241.138.64/basicinfo/${id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let DeleteBasicDetails = "";

        if (!res.data.error) {
          DeleteBasicDetails = res.data.msg;
        } else {
          DeleteBasicDetails = "";
        }

        dispatch(DeleteBasicDetailSuccess(DeleteBasicDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(DeleteBasicDetailFail(err));
      });
  };
};
