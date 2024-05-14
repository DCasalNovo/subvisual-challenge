import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/pokemonsSlice'
import findReducer from './find/findSlice'
import displayInfoReducer from './displayInfo/displayInfoSlice'

export const store = configureStore({
  reducer: {
    pokemonsReducer,
    findReducer,
    displayInfoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
