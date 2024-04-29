import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Line = {
  status: string;
  shape: string;
  flattenedPoints: number[];
  boneloss: boolean;
  cost: number;
  distance: number;
};

type LinesState = {
  lines: Line[];
};

const initialeState: LinesState = {
  lines: [],
};

export const line = createSlice({
  name: "line",
  initialState: initialeState,
  reducers: {
    addLine: (state, action: PayloadAction<Line>) => {
      state.lines.push({
        status: "Complete",
        shape: "Line",
        flattenedPoints: action.payload.flattenedPoints,
        boneloss: action.payload.boneloss,
        cost: action.payload.cost,
        distance: action.payload.distance
      });
    }
  },
});


export const { addLine } = line.actions;
export default line.reducer;
