import { FormEvent, useState } from 'react'
import { fetchPokemon, clearError } from '../redux/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { Spinner } from './Spinner'

export const FindPokeForm = () => {
  const pending = useSelector(
    (state: RootState) => state.pokemonsReducer.pending,
  )
  const error = useSelector((state: RootState) => state.pokemonsReducer.error)
  const dispatch = useDispatch<AppDispatch>()

  const [pokemonName, setPokemonName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(fetchPokemon(pokemonName))
  }

  return (
    <>
      <form
        className="flex gap-4 items-start"
        onSubmit={(e: FormEvent) => handleSubmit(e)}
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            value={pokemonName}
            onChange={(e) => {
              if (error) dispatch(clearError())
              setPokemonName(e.target.value)
            }}
            className={`w-full px-4 py-2 rounded-lg ring-1 focus:outline-none ${
              !error
                ? 'ring-gray-300 focus:ring-blue-500'
                : 'ring-red-500 focus:ring-red-500'
            }`}
            placeholder="Pokémon name"
            required
          />
          {error && <p className="px-3 text-sm text-red-500">{error}</p>}
        </div>
        <button
          className="px-4 py-2 font-medium rounded-lg text-white bg-blue-500 hover:bg-red-500 focus:outline-none transition-all duration-500"
          type="submit"
        >
          {!pending ? 'Search' : <Spinner />}
        </button>
      </form>
    </>
  )
}
