import "@/app/globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
