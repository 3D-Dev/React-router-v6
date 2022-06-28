import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const initalState = {
  usersData: [],
  isLoading: false,
  isError: false,
  errorMsg: ""
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "REQUEST_USERS_DATA":
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: ""
      };
    case "RECEIVE_USERS_DATA":
      return {
        ...state,
        usersData: action.usersData,
        isLoading: false
      };
    default:
      return state;
  }
}

export const requestUsers = (url) => async (dispatch) => {
  dispatch({
    type: "REQUEST_USERS_DATA"
  });
  try {
    const json = await axios.get(url);
    dispatch({
      type: "RECEIVE_USERS_DATA",
      usersData: json.data.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        return 0;
      }),
      isError: false,
      errorMsg: ""
    });
  } catch (e) {
    dispatch({
      type: "RECEIVE_USERS_DATA",
      usersData: [],
      isError: true,
      errorMsg: e
    });
  }
};

export default configureStore({ reducer });
