import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const imageSlice = createSlice({
  name: "gallery",
  initialState: {
    file: "",
    gallery: [],
  },
  reducers: {
    inputImage: (state, action) => {
      state.file = action.payload;
    },
    showList(state) {
      const image = { id: nanoid(8), url: state.file };
      state.gallery.push(image);
    },
  },
});

export const { inputImage, showList } = imageSlice.actions;
export default imageSlice.reducer;
