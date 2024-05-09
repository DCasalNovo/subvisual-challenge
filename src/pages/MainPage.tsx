import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { FindPokeForm } from '../components/FindPokeForm'

export const MainPage = () => {
  const pokemons = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemons,
  )

  return (
    <>
      <FindPokeForm></FindPokeForm>
      {pokemons && <div>{JSON.stringify(Object.keys(pokemons))}</div>}
    </>
  )
}
