type Kigo = {
  id: number
  name: string
  season: Season
  yomigana?: string
  kyukana?: string
  bodai?: Array<string>
}

type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'newYear'
