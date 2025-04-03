"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wallet, setWallet] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, wallet }),
    });

    if (res.ok) router.push("/login");
    else alert("Errore durante la registrazione");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Registrati</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Wallet Pi"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
      <button onClick={handleRegister} className="w-full bg-green-500 text-white py-2 rounded-xl">
        Registrati
      </button>
    </div>
  );
}
