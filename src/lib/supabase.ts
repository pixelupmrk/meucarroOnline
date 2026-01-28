import { createClient } from '@supabase/supabase-js'

// Estas chaves serão lidas automaticamente das variáveis que você configurou na Vercel/Netlify
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Atenção: Chaves do Supabase não encontradas. Verifique as variáveis de ambiente.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
