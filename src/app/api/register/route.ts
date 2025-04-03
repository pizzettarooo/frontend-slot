import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
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
