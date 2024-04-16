import { configureStore } from "@reduxjs/toolkit";
import polygonChange from "./features/polygon-slice"
import rectangleChange from "./features/rectangle-slice";
import {useSelector} from "react-redux"

export const store = configureStore({
    reducer: 
        { 
            "PolygonChange":polygonChange,
            "RectangleChange":rectangleChange,
        },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
