import * as actionTypes from "./actionTypes";
import axios from "axios";

//ShippingAgent
export const fetchShippingAgentSuccess = (ShippingAgent) => {
  return {
    type: actionTypes.FETCH_SHIPPING_AGENT_LIST_SUCCESS,
    ShippingAgent: ShippingAgent,
  };
};

export const fetchShippingAgentFail = (error) => {
  return {
    type: actionTypes.FETCH_SHIPPING_AGENT_LIST_FAIL,
    error: error,
  };
};

export const fetchShippingAgentStart = () => {
  return {
    type: actionTypes.FETCH_SHIPPING_AGENT_LIST,
  };
};

export const fetchShippingAgent = (access_token, query) => {
  return (dispatch) => {
    dispatch(fetchShippingAgentStart());

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
      .get("http://199.241.138.64/agents", options)
      .then((res) => {
        let fetchShippingAgent = {};
        fetchShippingAgent = res.data;
        dispatch(fetchShippingAgentSuccess(fetchShippingAgent));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchShippingAgentFail(err));
      });
  };
};

export const editShippingAgentDetailsModal = (data) => {
  return {
    type: actionTypes.EDIT_SHIPPING_AGENT_DETAIL_MODAL,
    data: data,
  };
};

//saving

export const SaveShippingAgentsDetailSuccess = (saveMessage) => {
  return {
    type: actionTypes.SAVE_SHIPPING_AGENTS_DETAILS_SUCCESS,
    saveMessage: saveMessage,
  };
};

export const SaveShippingAgentsDetailFail = (error) => {
  return {
    type: actionTypes.SAVE_SHIPPING_AGENTS_DETAILS_FAIL,
    error: error,
  };
};

export const SaveShippingAgentsDetailStart = () => {
  return {
    type: actionTypes.SAVE_SHIPPING_AGENTS_DETAILS,
  };
};

export const saveEditDetailsShippingAgent = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(SaveShippingAgentsDetailSuccess());

    const url = "http://199.241.138.64/agents";

    axios
      .post(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let SaveShippingAgentsDetails = "";

        if (!res.data.error) {
          SaveShippingAgentsDetails = res.data.msg;
        } else {
          SaveShippingAgentsDetails = "";
        }

        dispatch(SaveShippingAgentsDetailSuccess(SaveShippingAgentsDetails));
      })
      .catch((err) => {
        console.log(err);
        dispatch(SaveShippingAgentsDetailFail(err));
      });
  };
};

export const alertShowShippingAgents = (Data) => {
  return {
    type: actionTypes.ALERT_MODALS_SHOW_SHIPPING_AGENTS,
    CloseAlert: Data,
  };
};

//updating

export const UpdateShippingAgentsDetailSuccess = (UpdateMessage) => {
  return {
    type: actionTypes.UPDATE_SHIPPING_AGENTS_DETAILS_SUCCESS,
    UpdateMessage: UpdateMessage,
  };
};

export const UpdateShippingAgentsDetailFail = (error) => {
  return {
    type: actionTypes.UPDATE_SHIPPING_AGENTS_DETAILS_FAIL,
    error: error,
  };
};

export const UpdateShippingAgentsDetailStart = () => {
  return {
    type: actionTypes.UPDATE_SHIPPING_AGENTS_DETAILS,
  };
};

export const UpdateEditDetailsShippingAgent = (access_token, Datas) => {
  return (dispatch) => {
    dispatch(UpdateShippingAgentsDetailStart());

    const url = `http://199.241.138.64/agents/${Datas.id}`;

    axios
      .patch(url, Datas, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let UpdateShippingAgentsDetails = "";

        if (!res.data.error) {
          UpdateShippingAgentsDetails = res.data.msg;
        } else {
          UpdateShippingAgentsDetails = "";
        }

        dispatch(
          UpdateShippingAgentsDetailSuccess(UpdateShippingAgentsDetails)
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(UpdateShippingAgentsDetailFail(err));
      });
  };
};
// axios.all(data.map(data=> axios.post('asdasd',data,)))

//deleting

export const DeleteShippingAgentsDetailSuccess = (DeleteMessage) => {
  return {
    type: actionTypes.DELETE_SHIPPING_AGENTS_DETAILS_SUCCESS,
    DeleteMessage: DeleteMessage,
  };
};

export const DeleteShippingAgentsDetailFail = (error) => {
  return {
    type: actionTypes.DELETE_SHIPPING_AGENTS_DETAILS_FAIL,
    error: error,
  };
};

export const DeleteShippingAgentsDetailStart = () => {
  return {
    type: actionTypes.DELETE_SHIPPING_AGENTS_DETAILS,
  };
};

export const deleteEditDetailsShippingAgent = (access_token, u_id) => {
  return (dispatch) => {
    dispatch(DeleteShippingAgentsDetailStart());

    const url = `http://199.241.138.64/agents/${u_id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
      })
      .then((res) => {
        let DeleteShippingAgentsDetails = "";

        if (!res.data.error) {
          DeleteShippingAgentsDetails = res.data.msg;
        } else {
          DeleteShippingAgentsDetails = "";
        }

        dispatch(
          DeleteShippingAgentsDetailSuccess(DeleteShippingAgentsDetails)
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(DeleteShippingAgentsDetailFail(err));
      });
  };
};
