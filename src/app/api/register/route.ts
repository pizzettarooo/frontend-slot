import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { username, password, wallet } = await req.json();

  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("username", username)
    .single();

  if (existing) {
    return new Response("Utente già registrato", { status: 409 });
  }

  const { error } = await supabase.from("users").insert({
    username,
    password,
    wallet,
    credits: 0,
  });

  if (error) {
    return new Response("Errore", { status: 500 });
  }

  return Response.json({ success: true });
}
