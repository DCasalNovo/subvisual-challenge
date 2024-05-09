import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../types/Pokemon'

interface PokemonsState {
  pending: boolean
  error: string | undefined
  success: boolean
  pokemons: { [name: string]: Pokemon }
}

const initialState: PokemonsState = {
  pending: false,
  error: undefined,
  success: false,
  pokemons: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.pending = true
        state.success = false
        console.log('fetchPokemon.pending')
      })
      .addCase(
        fetchPokemon.fulfilled,
        (state, action: PayloadAction<Pokemon>) => {
          state.pending = false
          state.success = true
          state.pokemons[action.payload.name] = action.payload
        },
      )
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.pending = false
        state.error = action.error.message ?? 'An error has occured'
        console.log(action)
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
