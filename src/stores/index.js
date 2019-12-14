import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";

import { name, id } from "./user";

const reducer = combineReducers({
    name: name.reducer,
    id: id.reducer
});

const store = configureStore({ reducer });
export default store;
