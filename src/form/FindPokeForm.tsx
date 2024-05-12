import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { SearchPokemon } from '../utils/SearchPokemon'
import { FloatingInput } from '../components/FloatingInput'
import { updateNames } from '../redux/findPokemon/findPokemonSlice'

export const FindPokeForm = () => {
  const names = useSelector(
    (state: RootState) => state.findPokemonReducer.names,
  )
  const dispatch = useDispatch<AppDispatch>()
  const [pokemonName, setPokemonName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (names.length === 1) {
      setPokemonName(names[0][0])
    }
  }

  useEffect(() => {
    dispatch(updateNames(SearchPokemon(pokemonName)))
  }, [pokemonName])

  return (
    <>
      <form
        className="flex gap-4 items-start p-4"
        onSubmit={(e: FormEvent) => handleSubmit(e)}
      >
        <div className="flex flex-col gap-1">
          <FloatingInput
            label="Pokémon name"
            required
            value={pokemonName}
            onValueChange={(value) => {
              setPokemonName(value)
            }}
          />
        </div>
      </form>
    </>
  )
}
