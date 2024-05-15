import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect } from 'react'
import { clearState, fetchPokemon } from '../redux/pokemons/pokemonsSlice'
import { Pokemon } from '../types/Pokemon'
import { PokemonButton } from './CustomButton'
import { DisplayInfo } from './DisplayInfo'
import { capitalizeNames } from '../utils/utils'

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
    <div className="px-[4vw] lg:px-10 flex flex-col justify-between w-full h-full gap-4">
      <div className="w-full py-1 mt-4 flex gap-4 items-baseline justify-center border-b-2 border-slate-400">
        <h1
          data-testid="PokeInfo-name"
          className="font-bold text-3xl text-slate-600"
        >
          {capitalizeNames(currentPokemon.name)}
        </h1>
        <span data-testid="PokeInfo-id" className="text-xl text-slate-400">
          (id: {currentPokemon.id})
        </span>
      </div>
      <div className="flex justify-between w-full p-4">
        <PokemonButton
          data-testid="PokeInfo-prev"
          id={currentPokemon.id - 1}
          arrow="prev"
          pending={pending}
          message={message}
          onClick={handleClick}
        />
        <PokemonButton
          data-testid="PokeInfo-next"
          id={currentPokemon.id + 1}
          arrow="next"
          pending={pending}
          message={message}
          onClick={handleClick}
        />
      </div>
      <DisplayInfo pokemon={currentPokemon} />
    </div>
  )
}
