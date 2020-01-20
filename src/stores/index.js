import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { uid, name, mail, icon } from "./user";

const reducer = combineReducers({
  uid: uid.reducer,
  name: name.reducer,
  mail: mail.reducer,
  icon: icon.reducer
});

const store = configureStore({ reducer });
export default store;
