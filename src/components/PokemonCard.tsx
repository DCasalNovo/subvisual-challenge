import { capitalizeNames } from '../utils/utils'
import { Spinner } from './interactiveComponents/Spinner'

interface PokemonCardProps {
  pending: boolean
  pokemon: string
  number: number
  onclick: () => void
}

export const PokemonCard = ({
  pending,
  pokemon,
  number,
  onclick,
}: PokemonCardProps) => {
  return (
    <div
      className="w-52 flex flex-col items-center shadow-md bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      onClick={onclick}
    >
      {!pending ? (
        <img
          className="rounded-t-lg w-40 h-40"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
          alt=""
        />
      ) : (
        <div className="flex justify-center items-center w-20 h-20 m-10">
          <Spinner />
        </div>
      )}
      <div className="w-full p-5 flex flex-col items-center">
        <p
          data-testid={`PokeCard-name-${pokemon}`}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          {capitalizeNames(pokemon)}
        </p>
        <span
          data-testid={`PokeCard-id-${number}`}
          className="mb-3 text-gray-700 dark:text-gray-400"
        >
          (id: {number})
        </span>
      </div>
    </div>
  )
}
