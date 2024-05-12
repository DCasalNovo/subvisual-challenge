import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import { useEffect } from 'react'

export const MoreInfo = () => {
  const { pokemonName } = useParams()
  const navigate = useNavigate()

  const pokemonsList = useSelector(
    (state: RootState) => state.pokemonsReducer.pokemonsList,
  )

  useEffect(() => {
    if (
      pokemonName === undefined ||
      !pokemonsList.hasOwnProperty(pokemonName)
    ) {
      navigate('/', { replace: true })
    } else {
      console.log(pokemonsList[pokemonName])
    }
  }, [navigate, pokemonName, pokemonsList])

  if (pokemonName !== undefined) {
    return <div></div>
  }
}
