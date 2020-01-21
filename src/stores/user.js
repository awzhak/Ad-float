import { createSlice } from "@reduxjs/toolkit";

export const id = createSlice({
  name: "id",
  initialState: {
    id: null
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

export const uid = createSlice({
  name: "uid",
  initialState: {
    uid: 'Guest'
  },
  reducers: {
    setUid: (state, action) => {
      return Object.assign({}, state, { uid: action.payload })
    },
    clearUid: state => {
      return Object.assign({}, state, { uid: "" })
    }
  }
});

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

export const mail = createSlice({
  name: "mail",
  initialState: {
    mail: null
  },
  reducers: {
    setMail: (state, action) => {
      return Object.assign({}, state, { mail: action.payload })
    },
    clearMail: state => {
      return Object.assign({}, state, { mail: "" })
    }
  }
});

export const icon = createSlice({
  name: "icon",
  initialState: {
    icon: null
  },
  reducers: {
    setIcon: (state, action) => {
      return Object.assign({}, state, { icon: action.payload })
    },
    clearIcon: state => {
      return Object.assign({}, state, { icon: "" })
    }
  }
});

export const { setId, clearId } = id.actions;
export const { setUid, clearUid } = uid.actions;
export const { setName, clearName } = name.actions;
export const { setMail, clearMail } = mail.actions;
export const { setIcon, clearIcon } = icon.actions;