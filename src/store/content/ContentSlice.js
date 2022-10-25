import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  topic: "Redux Toolkit",
  description:
    "Redux Toolkit is an opinionated toolset for efficient Redux development created by the Redux team. It is the the standard and recommended way to write Redux logic and manage state in your JavaScript applications.",
};

export const ContentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    increaseId: (state, _action) => {
      state.id += 1;
    },
    decreaseId: (state, _action) => {
      state.id -= 1;
    },
  },
});

export const { increaseId, decreaseId } = ContentSlice.actions;
export default ContentSlice.reducer;
