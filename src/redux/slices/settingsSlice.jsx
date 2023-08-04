import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        amount: 0,
        category: '',
        difficulty: '',
        gameState: 'main',
        index: 0,
        score: 0,
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
        },
        updateGameState: (state, action) => {
            state.gameState = action.payload
        },
        updateScore: (state, action) => {
            state.score += action.payload
        },
    },
})

export const {updateCategory, updateDifficulty, updateAmount, incrementIndex, updateGameState, updateScore} = settingsSlice.actions

export const settingsReducer = settingsSlice.reducer