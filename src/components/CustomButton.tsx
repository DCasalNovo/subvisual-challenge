import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { SearchPokemonById } from '../utils/SearchPokemon'
import { capitalizeNames } from '../utils/utils'
import { Spinner } from './interactiveComponents/Spinner'

interface CustomButtonProps {
  id: number
  arrow: 'next' | 'prev'
  pending: boolean
  message?: string
  onClick: (pokemonName: string) => void
}

export const CustomButton = ({
  id,
  arrow,
  pending,
  message,
  onClick,
}: CustomButtonProps) => {
  const pokemonName = SearchPokemonById(id)
  if (pokemonName) {
    if (pending && pokemonName === message) {
      return (
        <div className="flex justify-center items-center w-10 h-10 mx-6">
          <Spinner />
        </div>
      )
    }
    return (
      <button
        className="inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-0 focus:outline-none"
        onClick={() => onClick(pokemonName)}
      >
        <span className="flex gap-3 px-5 py-2 justify-start items-center transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          {arrow === 'prev' ? <FaChevronLeft /> : null}
          {capitalizeNames(pokemonName)}
          {arrow === 'next' ? <FaChevronRight /> : null}
        </span>
      </button>
    )
  } else {
    return <div></div>
  }
}
