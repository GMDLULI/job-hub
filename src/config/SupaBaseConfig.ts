import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_URL
const supabaseAnonKey = import.meta.env.VITE_APP_KEY

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

export default supabase