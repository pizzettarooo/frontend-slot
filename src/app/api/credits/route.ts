import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);


export async function GET() {
  // ⚠️ SEMPLIFICATA: recupera sempre l’ultimo utente registrato
  // Sostituiscila con un sistema di sessione reale quando sei pronto

  const { data: user } = await supabase
    .from("users")
    .select("credits")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (!user) {
    return new Response("Utente non trovato", { status: 404 });
  }

  return Response.json({ credits: user.credits });
}
