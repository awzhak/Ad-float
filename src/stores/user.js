import { createSlice } from "@reduxjs/toolkit";

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
    mail: ''
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
    icon: ''
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

export const { setName, clearName } = name.actions;
export const { setMail, clearMail } = mail.actions;
export const { setIcon, clearIcon } = icon.actions;