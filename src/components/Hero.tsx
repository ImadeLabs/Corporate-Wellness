import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        <h1 className="text-6xl font-bold leading-tight">
          Employee Wellness
          <br />
          That Improves Productivity
        </h1>

        <p className="mt-6 text-xl max-w-3xl">
          Reduce burnout, improve workplace behaviour,
          and support employee mental health with
          professional behavioural therapy programs.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/book"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
          >
            Book Consultation
          </Link>

          <Link
            href="/pricing"
            className="border border-white px-8 py-4 rounded-lg"
          >
            View Packages
          </Link>

        </div>

      </div>
    </section>
  );
}