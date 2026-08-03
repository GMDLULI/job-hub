import {useState, useEffect} from 'react'
import {supabase} from '../../../config/SupaBaseConfig'
import type { ProviderProps } from '../../providers/Providers.types'
import { CATEGORIES } from '../../../data/catagories'

export const useProviders = () => {
  const [categories, setCategories] = useState<ProviderProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const { data: providers } = await supabase
        .from('providers')
        .select(`*, services(*), gallery(*)`)

      // Start with all predefined categories so empty ones still appear
      const grouped: Record<string, ProviderProps> = {}
      
      CATEGORIES.forEach(cat => {
        grouped[cat.key] = {
          name: cat.name,
          count: 0,
          img: cat.img,
          providers: [],
        }
      })

      // Fill in providers from database into their category
      providers?.forEach(p => {
        const key = p.category ?? 'other'
        if (grouped[key]) {
          grouped[key].providers.push({
            name: p.name,
            title: p.title,
            about: p.about,
            avatar: p.avatar_url,
            email: p.email,
            phone: p.phone,
            location: p.location,
            stars: p.stars,
            badge: p.badge,
            instagram: p.instagram,
            twitter: p.twitter,
            facebook: p.facebook,
            services: p.services.map((s: any) => ({
              name: s.name,
              price: s.price,
              duration: s.duration,
            })),
            gallery: p.gallery.map((g: any) => g.image_url),
            desc: ''
          })
          grouped[key].count = grouped[key].providers.length
        }
      })

      setCategories(Object.values(grouped))
      setLoading(false)
    }
    fetch()
  }, [])

  return { categories, loading }
}