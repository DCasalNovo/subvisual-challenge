import { useEffect } from 'react'
import { Pokemon } from '../types/Pokemon'
import { flipCard, updateSprites } from '../redux/displayInfo/displayInfoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { InfoCard } from './InfoCard'

interface DisplayInfoProps {
  pokemon: Pokemon
}

export const DisplayInfo = ({ pokemon }: DisplayInfoProps) => {
  console.log(pokemon)

  const sprites = useSelector(
    (state: RootState) => state.displayInfoReducer.sprites,
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(updateSprites(pokemon.sprites))
  }, [pokemon, dispatch])

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-max">
        <h1 className=" max-w-full w-[968px] font-bold text-2xl text-slate-600">
          Sprites:
        </h1>
        <div className="pl-6 overflow-auto">
          <div className="py-1.5 w-max flex gap-4">
            {Object.entries(sprites.default).map(([key, images]) => (
              <InfoCard
                text={key}
                imagem={
                  images.backSide ? (images.back as string) : images.front
                }
                onclick={() => {
                  dispatch(flipCard([key]))
                }}
              />
            ))}
          </div>
        </div>
        <h1 className="w-full py-4 font-bold text-2xl text-slate-600">
          Other sprites:
        </h1>
        <div className="pl-6 flex flex-col gap-4">
          {Object.entries(sprites.other).map(([otherKey, other]) => (
            <div className="w-full overflow-auto">
              <div key={otherKey} className="py-1.5 w-max flex gap-4">
                {Object.entries(other).map(([key, images]) => (
                  <InfoCard
                    key={key}
                    text={key}
                    context={otherKey}
                    imagem={
                      images.backSide ? (images.back as string) : images.front
                    }
                    onclick={() => {
                      dispatch(flipCard([otherKey, key]))
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <h1 className="w-full py-4 font-bold text-2xl text-slate-600">
          Sprites by Version:
        </h1>
        <div className="pl-6 flex flex-col gap-4">
          {Object.entries(sprites.versions).map(([versionsKey, version]) => (
            <div className="flex flex-col">
              <h1 className="w-full py-4 font-bold text-2xl text-slate-600">
                {versionsKey}
              </h1>
              {Object.entries(version).map(([versionKey, version]) => (
                <div className="w-full overflow-auto">
                  <div key={versionKey} className="py-1.5 w-max flex gap-4">
                    {Object.entries(version).map(([key, images]) => (
                      <InfoCard
                        key={key}
                        text={key}
                        context={versionKey}
                        imagem={
                          images.backSide
                            ? (images.back as string)
                            : images.front
                        }
                        onclick={() => {
                          dispatch(flipCard([versionsKey, versionKey, key]))
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
