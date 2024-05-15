import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { SearchPokemonByName, SearchPokemonById } from '../utils/SearchPokemon'
import { FloatingInput } from '../components/interactiveComponents/FloatingInput'
import { updateNames } from '../redux/find/findSlice'
import { CustomButton } from '../components/CustomButton'

export const FindPokeForm = () => {
  const namesList = useSelector(
    (state: RootState) => state.findReducer.namesList,
  )
  const dispatch = useDispatch<AppDispatch>()
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonId, setPokemonId] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (namesList.length === 1) {
      setPokemonName(namesList[0][0])
    }
  }

  useEffect(() => {
    dispatch(updateNames(SearchPokemonByName(pokemonName)))
  }, [pokemonName])

  useEffect(() => {
    if (parseInt(pokemonId))
      dispatch(updateNames(SearchPokemonById(parseInt(pokemonId))))
    else dispatch(updateNames(SearchPokemonByName(pokemonName)))
  }, [pokemonId])

  return (
    <>
      <form
        className="flex gap-4 items-start p-4"
        onSubmit={(e: FormEvent) => handleSubmit(e)}
      >
        <div className="flex flex-row items-center gap-4">
          <FloatingInput
            label="Pokémon name"
            value={pokemonName}
            onValueChange={(value) => {
              setPokemonName(value)
            }}
          />
          <FloatingInput
            label="Pokémon id"
            value={pokemonId}
            type="number"
            onValueChange={(value) => {
              if (value === '') setPokemonId('')
              else {
                const clearValue = value.replace(/\D/g, '')
                const val = parseInt(clearValue)
                if (val >= 1027 || val === 0) setPokemonId('1025')
                else if (val < 0 || val === 1026) setPokemonId('1')
                else setPokemonId(clearValue)
              }
            }}
          />
          <CustomButton
            onClick={() => {
              setPokemonName('')
              setPokemonId('')
            }}
          >
            Clear
          </CustomButton>
        </div>
      </form>
    </>
  )
}
