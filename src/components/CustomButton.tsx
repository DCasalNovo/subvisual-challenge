import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { SearchId } from '../utils/SearchPokemon'
import { capitalizeNames } from '../utils/utils'
import { Spinner } from './interactiveComponents/Spinner'

interface PokemonButtonProps {
  id: number
  arrow: 'next' | 'prev'
  pending: boolean
  message?: string
  'data-testid'?: string
  onClick: (pokemonName: string) => void
}

export const PokemonButton = ({
  id,
  arrow,
  pending,
  message,
  'data-testid': dataTestid,
  onClick,
}: PokemonButtonProps) => {
  const pokemonName = SearchId(id)
  if (pokemonName) {
    if (pending && pokemonName === message) {
      return (
        <div className="flex justify-center items-center w-10 h-10 mx-6">
          <Spinner />
        </div>
      )
    }
    return (
      <CustomButton
        data-testid={dataTestid}
        onClick={() => onClick(pokemonName)}
      >
        <>
          {arrow === 'prev' ? <FaChevronLeft /> : null}
          {capitalizeNames(pokemonName)}
          {arrow === 'next' ? <FaChevronRight /> : null}
        </>
      </CustomButton>
    )
  } else {
    return <div></div>
  }
}

interface CustomButtonProps {
  children: any
  'data-testid'?: string
  onClick: () => void
}

export const CustomButton = ({
  onClick,
  children,
  'data-testid': dataTestid,
}: CustomButtonProps) => {
  return (
    <button
      data-testid={dataTestid}
      className="h-fit inline-flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 font-semibold text-white hover:text-blue-800 focus:ring-0 focus:outline-none"
      onClick={onClick}
    >
      <span className="flex gap-3 px-5 py-2 justify-start items-center transition-all ease-in duration-75 bg-opacity-0 rounded-md group-hover:bg-white ">
        {children}
      </span>
    </button>
  )
}
