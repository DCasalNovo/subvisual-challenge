import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const PokemonPage = () => {
  const { pokemonName } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (pokemonName === undefined) {
      navigate('/', { replace: true })
    }
  }, [navigate, pokemonName])

  return (
    <div className="w-screen h-screen p-8 flex flex-col items-center overflow-auto">
      <div className="fixed top-0 left-0 w-screen h-screen -z-50">
        <img src="/bg.png" className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center gap-6 h-max w-full p-6 max-w-6xl rounded-3xl bg-white">
        <Link to="/" className="w-60">
          <img src="/pokemon.svg" />
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
