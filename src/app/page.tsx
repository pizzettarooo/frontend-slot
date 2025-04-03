import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Benvenuto nella Slot PvP</h1>
      <Link href="/login" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl text-center">
        Login
      </Link>
      <Link href="/register" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl text-center">
        Registrati
      </Link>
    </div>
  );
}
