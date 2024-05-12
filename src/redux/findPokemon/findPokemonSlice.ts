import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface findPokemonState {
  namesList: [string, number][]
}

const initialState: findPokemonState = {
  namesList: [],
}

const findPokemonSlice = createSlice({
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

export const { clearSearch, updateNames } = findPokemonSlice.actions

export default findPokemonSlice.reducer
