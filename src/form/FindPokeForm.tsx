import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
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
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <FloatingInput
              data-testid="FindPokeForm-name"
              label="Pokémon name"
              value={pokemonName}
              onValueChange={(value) => {
                setPokemonName(value)
              }}
            />
            <FloatingInput
              data-testid="FindPokeForm-id"
              label="Pokémon id"
              value={pokemonId}
              onValueChange={(value) => {
                if (value === '') setPokemonId('')
                else {
                  const clearValue = value.replace(/\D/g, '')
                  const val = parseInt(clearValue)
                  if (val > 1025) setPokemonId('1025')
                  else if (val < 1) setPokemonId('1')
                  else setPokemonId(clearValue)
                }
              }}
            />
          </div>
          <div className="flex flex-row md:flex-row sm:flex-col items-center gap-4 md:gap-8">
            <div className="flex gap-2 md:gap-4">
              <CustomButton
                onClick={() => {
                  const val = parseInt(pokemonId)
                  if (!pokemonId || val <= 1) setPokemonId('1025')
                  else setPokemonId(`${val - 1}`)
                }}
              >
                <FaChevronLeft
                  style={{ paddingBlock: '3px', height: '24px' }}
                />
              </CustomButton>
              <CustomButton
                onClick={() => {
                  const val = parseInt(pokemonId)
                  if (!pokemonId || val >= 1025) setPokemonId('1')
                  else setPokemonId(`${val + 1}`)
                }}
              >
                <FaChevronRight
                  style={{ paddingBlock: '3px', height: '24px' }}
                />
              </CustomButton>
            </div>
            <CustomButton
              onClick={() => {
                setPokemonName('')
                setPokemonId('')
              }}
            >
              Clear
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  )
}
