export interface Provider {
  name: string
  avatar: string
  title: string
  desc: string
  stars: string
  badge?: string
}

export interface ProviderProps {
  name: string
  count: number
  providers: Provider[]
}