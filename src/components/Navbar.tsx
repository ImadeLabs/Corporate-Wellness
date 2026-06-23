import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-blue-700"
        >
          Orbitech
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/advisory">Advisory</Link>
          <Link href="/technologies">Technologies</Link>
          <Link href="/wellness">Wellness</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}