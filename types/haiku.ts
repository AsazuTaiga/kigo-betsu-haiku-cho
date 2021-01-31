export type Haiku = {
  id: string
  haiku: string
  createdAt: string
}

export type HaikuResponse = {
  [key: string]: {
    haiku: string
    createdAt: string
  }
}
