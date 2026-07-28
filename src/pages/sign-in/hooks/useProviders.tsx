import {useState, useEffect} from 'react'
import {supabase} from '../../../config/SupaBaseConfig'
import type { ProviderProps } from '../../providers/Providers.types'

export const useProviders = () => {
  const [categories, setCategories] = useState<ProviderProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const { data: providers } = await supabase
        .from('providers')
        .select(`*, services(*), gallery(*)`)

      // Group providers by category to match your existing data shape
      const grouped = providers?.reduce((acc, p) => {
        const cat = p.category ?? 'Other'
        if (!acc[cat]) acc[cat] = { name: cat, count: 0, img: '', providers: [] }
        acc[cat].providers.push({
          name: p.name,
          title: p.title,
          about: p.about,
          avatar: p.avatar_url,
          email: p.email,
          phone: p.phone,
          location: p.location,
          stars: p.stars,
          badge: p.badge,
          services: p.services.map((s: any) => ({ name: s.name, price: s.price, duration: s.duration })),
          gallery: p.gallery.map((g: any) => g.image_url),
        })
        acc[cat].count = acc[cat].providers.length
        return acc
      }, {} as Record<string, ProviderProps>)

      setCategories(Object.values(grouped ?? {}))
      setLoading(false)
    }
    fetch()
  }, [])

  return { categories, loading }
}
