import { createSlice } from "redux-starter-kit";

export const name = createSlice({
    name: "name",
    initialState: {
        name: 'Guest'
    },
    reducers: {
        setName: (state, action) => {
            return Object.assign({}, state, { name: action.payload })
        },
        clearName: state => {
            return Object.assign({}, state, { name: "" })
        }
    }
});
    
export const id = createSlice({
    name: "id",
    initialState: {
        id: ''
    },
    reducers: {
        setId: (state, action) => {
            return Object.assign({}, state, { id: action.payload })
        },
        clearId: state => {
            return Object.assign({}, state, { id: "" })
        }
    }
});

export const { setName, clearName } = name.actions;
export const { setId, clearId } = id.actions;