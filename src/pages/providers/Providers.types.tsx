export interface ProviderService {
  name: string
  price: string
  duration: string
}

export interface Provider {
  name: string
  avatar: string
  title: string
  desc: string
  stars: string
  badge?: string
  about?: string
  location?: string
  mapUrl?: string
  phone?: string
  email?: string
  instagram?:string;
  twitter?:string;
  facebook?:string;
  services?: ProviderService[]
  gallery?: string[]
}

export interface ProviderProps {
  name: string
  count: number
  img: string
  providers: Provider[]
}