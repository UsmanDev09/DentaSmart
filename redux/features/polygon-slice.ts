import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Polygon = {
  points: number[];
  status: string;
  shape: string;
  label: string;
  id: string;
  flattenedPoints: number[];
  confidence?: number,
  labelCordinates?: { 
    x: number,
    y: number
  };
};

type Label = {
  id: string,
  label: string
}

type PolygonsState = {
  polygons: Polygon[];
};

const initialeState: PolygonsState = {
  polygons: [],
};

export const polygon = createSlice({
  name: "polygon",
  initialState: initialeState,
  reducers: {
    addPolygon: (state, action: PayloadAction<Polygon>) => {
      state.polygons.push({
        status: "Complete",
        id: action.payload.id,
        label: action.payload.label,
        points: action.payload.points,
        shape: "Polygon",
        flattenedPoints: action.payload.flattenedPoints,
        labelCordinates: action.payload.labelCordinates,
        confidence: action.payload.confidence
      });
    },
    editPolyLabel: (state, action: PayloadAction<Label>) => {
      state.polygons.map((polygon) => {
        if(polygon.id === action.payload.id) { 
          polygon.label = action.payload.label
        }
      })
    },
    deletePolygon: (state, action: PayloadAction<any>) => {      
      const filteredPoylgons = state.polygons.filter((polygon) => {
        return polygon.id !== action.payload
      })

      state.polygons = filteredPoylgons
    }
  },
});


export const { addPolygon, editPolyLabel, deletePolygon } = polygon.actions;
export default polygon.reducer;
