import { configureStore } from "@reduxjs/toolkit";
import polygonReducer from "./features/polygon-slice"
import rectangleReducer from "./features/rectangle-slice";
import patientAnalaysisReducer from "./features/patient-analysis-slice";
import lineReducer from "./features/line-analysis-slice";

export const store = configureStore({
    reducer: 
        { 
            "Polygon": polygonReducer,
            "Rectangle": rectangleReducer,
            "PatientAnalysis": patientAnalaysisReducer,
            "Line": lineReducer,
        },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
