import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { FindPokeForm } from '../form/FindPokeForm'
import { PokemonCard } from '../components/PokemonCard'
import { clearState, fetchPokemon } from '../redux/pokemons/pokemonsSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const MainPage = () => {
  const navigate = useNavigate()
  const pokemonsList = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemonsList,
  )
  const pending = useSelector(
    (state: RootState) => state.pokemonsReducer.pending,
  )
  const success = useSelector(
    (state: RootState) => state.pokemonsReducer.success,
  )
  const message = useSelector(
    (state: RootState) => state.pokemonsReducer.message,
  )

  const namesList = useSelector(
    (state: RootState) => state.findPokemonReducer.namesList,
  )
  const dispatch = useDispatch<AppDispatch>()

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
      navigate(`/pokemon/${message}`)
    }
  }, [success])

  return (
    <div className="w-screen h-screen p-8 flex flex-col items-center overflow-auto">
      <div className="fixed top-0 left-0 w-screen h-screen -z-50">
        <img src="/bg.png" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center gap-6 h-max w-full p-6 max-w-6xl rounded-3xl bg-white">
        <img src="/pokemon.svg" className="w-60" />
        <FindPokeForm></FindPokeForm>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center gap-4">
          {namesList.length > 0 &&
            namesList.map(([pokemon, number]) => (
              <PokemonCard
                pending={pending && pokemon === message}
                key={number}
                pokemon={pokemon}
                number={number}
                onclick={() => handleClick(pokemon)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
