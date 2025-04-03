import { createClient } from "@supabase/supabase-js";
import "dotenv/config"; // assicura che le variabili .env vengano lette

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { wallet, password } = await req.json();

    if (!wallet || !password) {
      return new Response(JSON.stringify({ error: "Campi mancanti" }), { status: 400 });
    }

    const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("wallet", wallet.trim())
      .eq("password", password)
      .single();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Credenziali errate" }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: "Login effettuato" }), { status: 200 });
  } catch (e) {
    console.error("🔥 Errore login:", e);
    return new Response(JSON.stringify({ error: "Errore interno" }), { status: 500 });
  }
}
