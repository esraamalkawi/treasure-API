import axios from "axios";

import * as actionTypes from "./types";

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/treasures");
      dispatch({
        type: actionTypes.FETCH_TREASURE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
