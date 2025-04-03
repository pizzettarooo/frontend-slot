"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [credits, setCredits] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/credits")
      .then((res) => res.json())
      .then((data) => setCredits(data.credits || 0));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <p>Crediti disponibili: <strong>{credits}</strong></p>
      <button onClick={() => router.push("/ricarica")} className="w-full bg-yellow-400 py-2 rounded-xl">
        💰 Ricarica
      </button>
      <button onClick={() => router.push("/ai")} className="w-full bg-purple-500 text-white py-2 rounded-xl">
        🧠 Gioca con AI (gratis)
      </button>
    </div>
  );
}
