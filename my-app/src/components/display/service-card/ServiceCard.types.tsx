export interface Provider {
  name: string
  avatar: string
  title: string
  desc: string
  stars: string
  badge: string
}

export interface ServiceCardProps {
  name: string
  count: number
  img: string
  providers: Provider[]
}