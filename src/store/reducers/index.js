import { combineReducers } from "redux";
import treasureReducer from "./treasureReducer";
import authReduser from "./authReducer";
const rootReducer = combineReducers({
  treasures: treasureReducer,
  users: authReduser,
});
export default rootReducer;
