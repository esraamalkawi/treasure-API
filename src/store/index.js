import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchTreasures } from "./actions/treasureActions";

import rootReducer from "./reducers/index";
import { checkForToken } from "./actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchTreasures());
store.dispatch(checkForToken());

export default store;
