import type { ProviderProps } from "../../../pages/providers/Providers.types"



export interface ServiceCardProps {
  services: ProviderProps[]
  loading:boolean
   onSelectCategory: (category: ProviderProps) => void
}