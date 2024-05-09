import { FormEvent, useEffect, useState } from 'react'
import { fetchPokemon, clearError } from '../redux/pokemons/pokemonsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { Spinner } from './Spinner'
import { SearchPokemon } from '../utils/SearchPokemon'
import { FloatingInput } from './FloatingInput'

export const FindPokeForm = () => {
  const pending = useSelector(
    (state: RootState) => state.pokemonsReducer.pending,
  )
  const error = useSelector((state: RootState) => state.pokemonsReducer.error)
  const pokemons = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemons,
  )
  const dispatch = useDispatch<AppDispatch>()

  const [pokemonName, setPokemonName] = useState('')
  const [searchPokemon, setSearchPokemon] = useState<string[]>([])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (searchPokemon.length === 1) {
      setPokemonName(searchPokemon[0])
      if (!pokemons.hasOwnProperty(searchPokemon[0])) {
        dispatch(fetchPokemon(searchPokemon[0]))
      }
    }
  }

  useEffect(() => {
    setSearchPokemon(SearchPokemon(pokemonName))
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
      {searchPokemon.length > 0 && (
        <div className="flex flex-col gap-2">
          {searchPokemon.map((pokemon) => (
            <p key={pokemon}>{pokemon}</p>
          ))}
        </div>
      )}
    </>
  )
}
