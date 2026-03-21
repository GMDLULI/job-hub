export type Provider = {
  name: string
  avatar: string
  title: string
  desc: string
  stars: string
  badge: string
}

export interface ServiceItem {
  name: string
  count: number
  img: string
  providers: Provider[]
 
}

export interface ServiceCardProps {
   onSelectCategory: (category: ServiceItem) => void
}