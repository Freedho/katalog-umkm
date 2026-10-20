import { createClient } from "@supabase/supabase-js";

/**
 * Koneksi Supabase di sisi server untuk pengunjung.
 * Menggunakan SUPABASE_SECRET_KEY untuk membaca data katalog produk secara langsung di server
 * tanpa mengekspos kunci ke browser.
 */
export function createServerClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "SUPABASE_URL dan SUPABASE_SECRET_KEY belum diatur di environment variable."
    );
  }

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export { createServerClient as createClient };

