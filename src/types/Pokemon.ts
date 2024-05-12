type Url = string

interface Link {
  name: string
  url: Url
}

interface Abilities {
  ability: Link
  is_hidden: boolean
  slot: number
}

interface GameIndices {
  game_index: number
  version: Link
}

interface VersionGroupDetails {
  level_learned_at: number
  move_learn_method: Link
  version_group: Link
}

interface Moves {
  move: Link
  version_group_details: VersionGroupDetails[]
}

interface cries {
  [key: string]: Url
}

interface Sprites {
  [key: string]: Url | null | object
}

interface Stats {
  base_stat: number
  effort: number
  stat: Link
}

interface Types {
  slot: number
  type: Link
}

export interface Pokemon {
  abilities: Abilities[]
  base_experience: number
  cries: cries
  forms: Link[]
  game_indices: GameIndices[]
  height: number
  held_items: []
  id: number
  is_default: true
  location_area_encounters: Url
  moves: Moves[]
  name: string
  order: number
  past_types: []
  species: Link
  sprites: Sprites
  stats: Stats[]
  types: Types[]
  weight: number
}
