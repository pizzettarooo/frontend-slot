import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

export async function POST(req: Request) {
  const { wallet, password } = await req.json();

  if (!wallet || !password) {
    return new Response(JSON.stringify({ error: "Campi mancanti" }), { status: 400 });
  }

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("wallet", wallet)
    .eq("password", password)
    .single();

  if (error || !data) {
    return new Response(JSON.stringify({ error: "Credenziali errate" }), { status: 401 });
  }

  return new Response(JSON.stringify({ message: "Login effettuato" }), { status: 200 });
}
