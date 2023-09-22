import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "../userReducer/userReducer";
import fileReducer from "../fileReducer/fileReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
