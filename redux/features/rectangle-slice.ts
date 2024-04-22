import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Rectangle = {
  shape: string;
  status: string;
  x: number;
  y: number;
  width: number;
  height: number;
  key: number;
  id: string;
  label: string;
};

type RectanglesState = {
  rectangles: Rectangle[];
};

const initialState: RectanglesState = {
  rectangles: [],
};

export const rectangle = createSlice({
  name: "rectangle",
  initialState: initialState,
  reducers: {
    addRectangle: (state, action: PayloadAction<Rectangle>) => {
      const { key } = action.payload;
      state.rectangles[key] = action.payload;
    },
    removeRectangle: (state, action: PayloadAction<number>) => {
      delete state.rectangles[action.payload];
    },
  },
});

export const { addRectangle, removeRectangle } = rectangle.actions;
export default rectangle.reducer;