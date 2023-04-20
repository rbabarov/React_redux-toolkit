import { configureStore } from "@reduxjs/toolkit";

import toolkitReducer from "../slices/toolkitSlices";
import imageSlice from "../slices/imageSlices";

export default configureStore({
  reducer: {
    facts: toolkitReducer,
    images: imageSlice,
  },
});
