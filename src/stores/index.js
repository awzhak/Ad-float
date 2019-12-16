import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { name, mail, icon } from "./user";

const reducer = combineReducers({
  name: name.reducer,
  mail: mail.reducer,
  icon: icon.reducer
});

const store = configureStore({ reducer });
export default store;
