import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, ANON_KEY } from '@/config'

const db = createClient(SUPABASE_URL as string, ANON_KEY as string)
