import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import users from "./users";
import comment from "./comment";

const reducers = combineReducers({ users , comment });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();