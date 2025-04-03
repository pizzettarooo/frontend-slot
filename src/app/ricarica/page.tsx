export default function RicaricaPage() {
    const walletAddress = process.env.NEXT_PUBLIC_WALLET || "GCMEELHBN6VBVFGVRRD7PAGJZY63F3...";
  
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Ricarica il tuo account</h2>
        <p>Invia Pi al seguente wallet:</p>
        <div className="bg-gray-200 p-4 rounded text-sm break-all">{walletAddress}</div>
      </div>
    );
  }
  