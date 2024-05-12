import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { FindPokeForm } from '../form/FindPokeForm'
import { PokemonCard } from '../components/PokemonCard'
import { fetchPokemon } from '../redux/pokemons/pokemonsSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const MainPage = () => {
  const navigate = useNavigate()
  const pokemons = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemons,
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

  const names = useSelector(
    (state: RootState) => state.findPokemonReducer.names,
  )
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = (pokemon: string) => {
    if (!pokemons.hasOwnProperty(pokemon)) {
      dispatch(fetchPokemon(pokemon))
    } else {
      navigate(`/pokemon/${pokemon}`)
    }
  }

  useEffect(() => {
    if (success && message) navigate(`/pokemon/${message}`)
  }, [success])

  return (
    <div className="w-screen h-screen p-8 flex justify-center overflow-auto bg-slate-600">
      <div className="flex flex-col items-center h-max w-full p-6 max-w-6xl rounded-3xl bg-white">
        <FindPokeForm></FindPokeForm>
        <div className="w-full h-[2px] bg-gray-200 m-4"></div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center gap-4">
          {names.length > 0 &&
            names.map(([pokemon, number]) => (
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

// {pokemons && <div>{JSON.stringify(Object.keys(pokemons))}</div>}
