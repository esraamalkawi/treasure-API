//actions
import * as actionTypes from "../actions/types";

const initialState = {
  treasures: [],
  loading: true,
};

const treasureReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TREASURE:
      return {
        ...state,
        treasures: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default treasureReduser;
