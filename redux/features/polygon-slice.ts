import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialeState = {
  value: PolygonState;
};
type PolygonState = {
  points: Array<any>;
  status:string;
  shape:string
};
const initialeState = {
  value: {
    points: [],
    status:"None",
    shape:"None"
  } as PolygonState,
} as InitialeState;

export const polygon = createSlice({
  name: "polygon",
  initialState: initialeState,
  reducers: {
    addPolygon: ( state,action: PayloadAction<any>) => {
      return {
        
        value: {
          status:"Complete",
          points: action.payload,
          shape: "Polygon"
        },
      };
    },
  },
});

export const { addPolygon } = polygon.actions;
export default polygon.reducer;