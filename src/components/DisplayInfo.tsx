import { useEffect, useState } from 'react'
import { Pokemon } from '../types/Pokemon'

const getImages = (
  pokemon: { [base: string]: string | null | object },
  property: string,
) => {
  const filteredObj: { [base: string]: string } = {}

  for (const key in pokemon) {
    if (typeof pokemon[key] === 'string' && key.includes(property)) {
      filteredObj[key] = pokemon[key] as string
    }
  }

  return filteredObj
}

interface DisplayInfoProps {
  pokemon: Pokemon
}

export const DisplayInfo = ({ pokemon }: DisplayInfoProps) => {
  const [shiny, setShiny] = useState(false)
  const [female, setFemale] = useState(false)
  const [back, setBack] = useState(false)
  const [images, setImages] = useState({})

  useEffect(() => {
    let property = back ? 'back' : 'front'
    property += shiny ? '_shiny' : ''
    property += female ? '_female' : ''
    property += !female && !shiny ? '_default' : ''
    console.log(property)

    setImages(getImages(pokemon.sprites, property))
  }, [])
  console.log(images)

  return (
    <>
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <img
        className="rounded-t-lg w-40 h-40"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt=""
      />
    </>
  )
}
