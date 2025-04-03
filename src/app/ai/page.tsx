"use client";

export default function AiPage() {
  const handleStart = () => {
    alert("🚧 Modalità AI in sviluppo... ma il credito non verrà scalato 😎");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Gioca contro AI</h2>
      <p>Versione gratuita di test. Nessun credito verrà scalato.</p>
      <button onClick={handleStart} className="w-full bg-purple-500 text-white py-2 rounded-xl">
        Inizia partita
      </button>
    </div>
  );
}
