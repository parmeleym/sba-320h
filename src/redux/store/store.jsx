import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { triviaReducer } from "../slices/fetchQuestionsSlice";
import { settingsReducer } from "../slices/settingsSlice";

const rootReducer = combineReducers({
    settings: settingsReducer,
    questions: triviaReducer,
})

export const store = configureStore({ reducer: rootReducer })

