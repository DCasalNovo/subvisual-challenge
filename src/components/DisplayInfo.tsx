import { Pokemon } from '../types/Pokemon'

interface DisplayInfoProps {
  pokemon: Pokemon
}

export const DisplayInfo = ({ pokemon }: DisplayInfoProps) => {
  return (
    <>
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
    </>
  )
}
