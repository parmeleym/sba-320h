import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        amount: 0,
        category: '',
        difficulty: '',
        gameState: 'menu',
        index: 0,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateAmount: (state, action) => {
            state.amount = action.payload
        },
        updateCategory: (state, action) => {
            state.category = action.payload
        },
        updateDifficulty: (state, action) => {
            state.difficulty = action.payload
        },
        incrementIndex: (state) => {
            state.index++
        }
    },
})

export const {updateCategory, updateDifficulty, updateAmount} = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer