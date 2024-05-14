import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../types/Pokemon'

const clearNames = (string: string) => {
  if (string.startsWith('generation')) {
    const number = string.split('-')[1]
    return 'Generation ' + number.toUpperCase()
  }
  return string.replace(/(front|back)-/g, '').replace(/[_]/g, '-')
}

interface spriteImages {
  default: {
    [base: string]: { front: string; back?: string; backSide: boolean }
  }
  other: {
    [key: string]: {
      [base: string]: { front: string; back?: string; backSide: boolean }
    }
  }
  versions: {
    [gen: string]: {
      [key: string]: {
        [base: string]: { front: string; back?: string; backSide: boolean }
      }
    }
  }
}

const groupImages = (sprites: { [key: string]: string | null }) => {
  let images: spriteImages['default'] = {}
  for (const key in sprites) {
    if (sprites[key] !== null && key.startsWith('front')) {
      const backKey = key.replace('front', 'back')
      if (sprites.hasOwnProperty(backKey) && sprites[backKey] !== null)
        images[clearNames(key)] = {
          front: sprites[key] as string,
          back: sprites[backKey] as string,
          backSide: false,
        }
      else {
        images[clearNames(key)] = {
          front: sprites[key] as string,
          backSide: false,
        }
      }
    }
  }
  return images
}

const getImages = (sprites: Pokemon['sprites']) => {
  const { other, versions } = sprites

  let defaultSprites: { [key: string]: string } = {}

  for (const key in sprites) {
    if (
      key !== 'other' &&
      key !== 'versions' &&
      typeof sprites[key] === 'string'
    ) {
      defaultSprites[key] = sprites[key] as string
    }
  }

  let otherImages: spriteImages['other'] = {}
  for (const key in other) {
    otherImages[key] = groupImages(other[key])
  }

  let versionsImages: spriteImages['versions'] = {}
  for (const gen in versions) {
    const version = versions[gen]
    const clearGen = clearNames(gen)
    versionsImages[clearGen] = {}
    for (const key in version) {
      versionsImages[clearGen][key] = groupImages(version[key])
    }
  }

  return {
    default: groupImages(defaultSprites),
    other: otherImages,
    versions: versionsImages,
  }
}

interface displayInfoState {
  sprites: spriteImages
}

const initialState: displayInfoState = {
  sprites: {
    default: {},
    other: {},
    versions: {},
  },
}

const displayInfoSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    updateSprites: (state, action: PayloadAction<Pokemon['sprites']>) => {
      state.sprites = getImages(action.payload)
    },
    flipCard: (state, action: PayloadAction<string[]>) => {
      const payload = action.payload
      switch (payload.length) {
        case 1:
          state.sprites.default[payload[0]].backSide =
            !state.sprites.default[payload[0]].backSide &&
            state.sprites.default[payload[0]].back !== undefined
          break
        case 2:
          state.sprites.other[payload[0]][payload[1]].backSide =
            !state.sprites.other[payload[0]][payload[1]].backSide &&
            state.sprites.other[payload[0]][payload[1]].back !== undefined
          break
        case 3:
          state.sprites.versions[payload[0]][payload[1]][payload[2]].backSide =
            !state.sprites.versions[payload[0]][payload[1]][payload[2]]
              .backSide &&
            state.sprites.versions[payload[0]][payload[1]][payload[2]].back !==
              undefined
          break
        default:
          break
      }
    },
  },
})

export const { updateSprites, flipCard } = displayInfoSlice.actions

export default displayInfoSlice.reducer
