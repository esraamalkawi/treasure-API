import axios from "axios";
import * as actionTypes from "./types";
import decode from "jwt-decode";
import Swal from "sweetalert2";

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", newUser);
      dispatch({
        type: actionTypes.SET_USER,
        payload: res.data,
      });
      {
        Swal.fire("this is a fancy logged in message");
      }
      history.replace("/things");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", userData);
      {
        Swal.fire("this is a fancy logged in message");
      }
      dispatch(setUser(res.data.token));
      history.replace("/things");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signout = () => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  localStorage.removeItem("myToken");
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
