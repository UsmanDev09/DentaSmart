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

type Label = {
  id: string,
  label: string
}

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
      state.rectangles.push(action.payload);
    },

    editRectLabel:(state, action:PayloadAction<Label>)=>{
      state.rectangles.map((rectangle)=>{
        if(rectangle.id === action.payload.id) {
          rectangle.label = action.payload.label
        }
      })
    },

    removeRectangle: (state, action: PayloadAction<any>) => {
      const filteredRectangles = state.rectangles.filter((rectangle) => {
        return rectangle.id !== action.payload
      })
      state.rectangles = filteredRectangles;
    }
  },
});

export const { addRectangle, removeRectangle, editRectLabel } = rectangle.actions;
export default rectangle.reducer;