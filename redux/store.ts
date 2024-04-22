import { configureStore } from "@reduxjs/toolkit";
import polygonReducer from "./features/polygon-slice"
import rectangleReducer from "./features/rectangle-slice";

export const store = configureStore({
    reducer: 
        { 
            "Polygon": polygonReducer,
            "Rectangle": rectangleReducer,
        },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
