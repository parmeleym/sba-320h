import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    questions: [],
    loading: false,
    error: null,
}

export const fetchQuestions = createAsyncThunk(
    'settings/fetchQuestions',
    async ({amt, category, difficulty}) => {
        const response = await axios('https://opentdb.com/api.php?'.concat('amount='+amt+'&category='+category+'&difficulty='+difficulty+'&type=multiple'))
        const data = await response.data.results
        console.log(data);
        return data
    }
)

export const triviaSlice = createSlice({
    name: 'trivia',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.loading = false
            state.questions = action.payload
        })
        builder.addCase(fetchQuestions.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    },
})

export const triviaReducer = triviaSlice.reducer