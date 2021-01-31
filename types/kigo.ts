export type Kigo = {
  id: number
  name: string
  season: Season
  yomigana: string
  kyukana: string
  bodai: Array<string>
}

export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'newYear'
