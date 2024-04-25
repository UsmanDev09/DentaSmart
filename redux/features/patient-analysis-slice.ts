import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PatientAnalysis = {
  
};

type PatientAnalysisState = {
  patientAnalysis: PatientAnalysis[];
};

const initialeState: PatientAnalysisState = {
  patientAnalysis: [],
};

export const patientAnalysis = createSlice({
  name: "patientAnalysis",
  initialState: initialeState,
  reducers: {
        initializePatientAnalysis: (state, action) => {
            return action.payload;
        }
    }
  },
);


export const { initializePatientAnalysis } = patientAnalysis.actions;
export default patientAnalysis.reducer;
