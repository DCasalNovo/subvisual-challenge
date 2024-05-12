import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../types/Pokemon'

interface PokemonsState {
  pending: boolean
  error: boolean
  success: boolean
  message: string | undefined
  pokemons: { [name: string]: Pokemon }
}

const initialState: PokemonsState = {
  pending: false,
  error: false,
  success: false,
  message: undefined,
  pokemons: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state, action) => {
        state.pending = true
        state.success = false
        state.message = action.meta.arg
        console.log('fetchPokemon.pending')
      })
      .addCase(
        fetchPokemon.fulfilled,
        (state, action: PayloadAction<Pokemon>) => {
          state.pending = false
          state.success = true
          state.message = action.payload.name
          state.pokemons[action.payload.name] = action.payload
          console.log('fetchPokemon.fulfilled: ' + action.payload.name)
        },
      )
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.pending = false
        state.error = true
        state.message = action.error.message ?? 'An error has occured'
        console.log('fetchPokemon.rejected: ' + action.error.message)
      })
  },
})

export const fetchPokemon = createAsyncThunk(
  'pokemons/fetchPokemon',
  async (pokemonName: string) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`,
    )
    if (!response.ok) {
      throw new Error('Pokemon not found')
    }
    const data = await response.json()
    return data
  },
)
export const { clearError } = pokemonsSlice.actions

export default pokemonsSlice.reducer
