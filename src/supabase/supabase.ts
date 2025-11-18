import { createClient } from '@supabase/supabase-js'
import 'expo-sqlite/localStorage/install'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

function getEnvs(): { url: string; key: string } {
	if (!supabaseUrl || !supabasePublishableKey) {
		throw new Error('Missing Supabase environment variables')
	}

	return { url: supabaseUrl, key: supabasePublishableKey }
}

const envs = getEnvs()

export const supabase = createClient(envs.url, envs.key, {
	auth: {
		storage: localStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false
	}
})
