import { createSlice } from "@reduxjs/toolkit";

export const footer = createSlice({
  name: "footer",
  initialState: {
    footer: 0
  },
  reducers: {
    setFooter: (state, action) => {
      return Object.assign({}, state, { footer: action.payload })
    }
  }
});

export const { setFooter } = footer.actions;