import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface findPokemonState {
  names: [string, number][]
}

const initialState: findPokemonState = {
  names: [],
}

const findPokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.names = []
    },
    updateNames: (state, action: PayloadAction<[string, number][]>) => {
      state.names = action.payload
    },
  },
})

export const { clearSearch, updateNames } = findPokemonSlice.actions

export default findPokemonSlice.reducer
