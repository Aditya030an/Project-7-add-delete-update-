import { configureStore } from "@reduxjs/toolkit";
import HealthDataSlice from "./HealthDataSlice";

const store = configureStore({
    reducer:{

        healthCareData:HealthDataSlice,
    }
});

export default store;