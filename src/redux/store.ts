import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/pokemonsSlice'
import findPokemonReducer from './findPokemon/findPokemonSlice'

export const store = configureStore({
  reducer: {
    pokemonsReducer,
    findPokemonReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
