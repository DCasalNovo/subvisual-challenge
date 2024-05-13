import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect } from 'react'
import { clearState, fetchPokemon } from '../redux/pokemons/pokemonsSlice'
import { Pokemon } from '../types/Pokemon'
import { CustomButton } from './CustomButton'
import { DisplayInfo } from './DisplayInfo'

export const PokemonInfo = () => {
  const navigate = useNavigate()
  const pending = useSelector(
    (state: RootState) => state.pokemonsReducer.pending,
  )
  const success = useSelector(
    (state: RootState) => state.pokemonsReducer.success,
  )
  const message = useSelector(
    (state: RootState) => state.pokemonsReducer.message,
  )
  const pokemonsList = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemonsList,
  )
  const dispatch = useDispatch<AppDispatch>()

  const { pokemonName } = useParams()

  useEffect(() => {
    if (
      pokemonName !== undefined &&
      !pokemonsList.hasOwnProperty(pokemonName)
    ) {
      dispatch(fetchPokemon(pokemonName))
    }
  }, [pokemonName, pokemonsList])

  const handleClick = (pokemon: string) => {
    if (!pokemonsList.hasOwnProperty(pokemon)) {
      dispatch(fetchPokemon(pokemon))
    } else {
      navigate(`/pokemon/${pokemon}`)
    }
  }

  useEffect(() => {
    if (success && message) {
      dispatch(clearState())
      if (pokemonName !== message) {
        navigate(`/pokemon/${message}`)
      }
    }
  }, [success])

  if (pokemonName === undefined || !pokemonsList.hasOwnProperty(pokemonName)) {
    return <></>
  }
  const currentPokemon: Pokemon = pokemonsList[pokemonName]

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex justify-between w-full p-4 font-semibold text-blue-800">
        <CustomButton
          id={currentPokemon.id - 1}
          arrow="prev"
          pending={pending}
          message={message}
          onClick={handleClick}
        />
        <CustomButton
          id={currentPokemon.id + 1}
          arrow="next"
          pending={pending}
          message={message}
          onClick={handleClick}
        />
      </div>
      <div className="flex flex-col items-center w-full h-full p-2">
        <DisplayInfo pokemon={currentPokemon} />
      </div>
    </div>
  )
}
