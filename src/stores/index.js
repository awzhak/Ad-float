import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { id, uid, name, mail, icon } from "./user";
import { footer } from "./rendering"

const reducer = combineReducers({
  id: id.reducer,
  uid: uid.reducer,
  name: name.reducer,
  mail: mail.reducer,
  icon: icon.reducer,
  footer: footer.reducer
});

const store = configureStore({ reducer });
export default store;
