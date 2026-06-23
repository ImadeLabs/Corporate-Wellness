import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  const divisions = [
    {
      title: "Orbitech Advisory",
      href: "/advisory",
      desc: "Tax consulting, finance, audit and business advisory services."
    },
    {
      title: "Orbitech Technologies",
      href: "/technologies",
      desc: "Software development, websites, AI and automation."
    },
    {
      title: "Orbitech Wellness",
      href: "/wellness",
      desc: "Corporate wellness, coaching and behavioural therapy."
    },
    {
      title: "Orbitech Academy",
      href: "/academy",
      desc: "Courses, mentoring and professional development."
    },
    {
      title: "Orbitech Properties",
      href: "/properties",
      desc: "Property listings, due diligence and investment services."
    }
  ];

  return (
    <>
      <Navbar />

      <main>

        <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white">

          <div className="max-w-7xl mx-auto px-6 py-28">

            <p className="uppercase tracking-wider text-blue-200">
              Business Growth • Technology • Real Estate • Wellness • Education
            </p>

            <h1 className="text-6xl md:text-7xl font-bold mt-6">
              Orbitech Business Solutions
            </h1>

            <p className="text-xl mt-8 max-w-3xl">
              One Partner for Business Growth, Technology,
              Real Estate, Wellness and Education.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://wa.me/2347037819477"
                target="_blank"
                className="bg-green-500 px-8 py-4 rounded-lg font-semibold"
              >
                WhatsApp Us
              </a>

              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
              >
                Book Consultation
              </Link>

            </div>

          </div>

        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">

          <h2 className="text-5xl font-bold text-center">
            Our Divisions
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Serving businesses, professionals, investors and organizations globally.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {divisions.map((division) => (
              <Link
                key={division.title}
                href={division.href}
                className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold">
                  {division.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {division.desc}
                </p>
              </Link>
            ))}

          </div>

        </section>

      </main>
    </>
  );
}