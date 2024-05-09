import { FormEvent, useEffect, useState } from 'react'
import { fetchPokemon, clearError } from '../redux/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { Spinner } from '../components/Spinner'
import { SearchPokemon } from '../utils/SearchPokemon'
import { FloatingInput } from '../components/FloatingInput'
import { updateNames } from '../redux/findPokemon/findPokemonSlice'

export const FindPokeForm = () => {
  const pending = useSelector(
    (state: RootState) => state.pokemonsReducer.pending,
  )
  const error = useSelector((state: RootState) => state.pokemonsReducer.error)
  const pokemons = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemons,
  )
  const names = useSelector(
    (state: RootState) => state.findPokemonReducer.names,
  )
  const dispatch = useDispatch<AppDispatch>()

  const [pokemonName, setPokemonName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (names.length === 1) {
      setPokemonName(names[0][0])
      if (!pokemons.hasOwnProperty(names[0][0])) {
        dispatch(fetchPokemon(names[0][0]))
      }
    }
  }

  useEffect(() => {
    dispatch(updateNames(SearchPokemon(pokemonName)))
  }, [pokemonName])

  return (
    <>
      <form
        className="flex gap-4 items-start p-12"
        onSubmit={(e: FormEvent) => handleSubmit(e)}
      >
        <div className="flex flex-col gap-1">
          <FloatingInput
            error={error}
            label="Pokémon name"
            required
            value={pokemonName}
            onValueChange={(value) => {
              if (error) dispatch(clearError())
              setPokemonName(value)
            }}
          />
        </div>
        <button
          className="px-4 py-2 font-medium rounded-lg text-white bg-blue-500 hover:bg-red-500 focus:outline-none transition-all duration-500"
          type="submit"
        >
          {!pending ? 'Search' : <Spinner />}
        </button>
      </form>
      {names.length > 0 && (
        <div className="flex flex-col gap-2">
          {names.map(([pokemon, number]) => (
            <p key={number}>
              {pokemon} {number}
            </p>
          ))}
        </div>
      )}
    </>
  )
}
