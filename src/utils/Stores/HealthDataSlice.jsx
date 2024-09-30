import { createSlice } from "@reduxjs/toolkit";

const healthDataSlice = createSlice({
  name: "healthCareData",
  initialState: {
    items: [],
    showForm: false,
    updateIndex: "",
    showUpdate: false,
  },
  reducers: {
    addHealthCareData: (state, action) => {
      // console.log("inside store action" , action.payload);
      console.log("show updata in addHealthCaraData", state.showUpdate);
      if (state.showUpdate) {
        state.items[state.updateIndex] = action.payload;
      } else {
        state.items.push(action.payload);
      }
      // console.log("inside store state" , state.items.length);
    },
    setShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    setDeleteIndex: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    setUpdateIndex: (state, action) => {
      state.updateIndex = action.payload;
    },
    setShowUpdate: (state, action) => {
      state.showUpdate = action.payload;
    },
  },
});

export const {
  addHealthCareData,
  setShowForm,
  setDeleteIndex,
  setUpdateIndex,
  setShowUpdate,
} = healthDataSlice.actions;
export default healthDataSlice.reducer;
