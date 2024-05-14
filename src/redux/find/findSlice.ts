import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface findState {
  namesList: [string, number][]
}

const initialState: findState = {
  namesList: [],
}

const findSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.namesList = []
    },
    updateNames: (state, action: PayloadAction<[string, number][]>) => {
      state.namesList = action.payload
    },
  },
})

export const { clearSearch, updateNames } = findSlice.actions

export default findSlice.reducer
