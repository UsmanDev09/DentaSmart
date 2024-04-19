import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialeState = {
  value: PolygonState;
};
type PolygonState = {
  points: [];
  status:string;
  shape:string;
  label:string;
  id: string;
};
const initialeState = {
  value: {
    points: [],
    status:"None",
    shape:"None",
    label: "",
    id: ""
    
  } as PolygonState,
} as InitialeState;

export const polygon = createSlice({
  name: "polygon",
  initialState: initialeState,
  reducers: {
    addPolygon: ( state , action: PayloadAction<any>) => {
      console.log('action', action)
      return {
        value: {
          status:"Complete",
          id: action.payload.id,
          label: action.payload.label,
          points: action.payload.points,
          shape: "Polygon"
        },
      };
    },
  },
});

export const { addPolygon } = polygon.actions;
export default polygon.reducer;