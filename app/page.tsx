import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Link
        href="/dashboard"
        className="px-6 py-3 rounded-lg bg-rose-500 text-white hover:bg-rose-600 transition"
      >
        Go to Dashboard →
      </Link>
    </main>
  );
}
