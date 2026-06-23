import Navbar from "@/components/Navbar";

export default function AdvisoryPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-bold">
          Orbitech Advisory
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Tax consulting, finance, audit and business advisory services for
          businesses, startups, NGOs and diaspora entrepreneurs.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="p-8 border rounded-xl">
            <h2 className="text-2xl font-bold">
              Tax Consulting
            </h2>
          </div>

          <div className="p-8 border rounded-xl">
            <h2 className="text-2xl font-bold">
              Finance & Audit
            </h2>
          </div>

          <div className="p-8 border rounded-xl">
            <h2 className="text-2xl font-bold">
              Business Registration
            </h2>
          </div>

          <div className="p-8 border rounded-xl">
            <h2 className="text-2xl font-bold">
              Compliance Advisory
            </h2>
          </div>

        </div>

      </main>
    </>
  );
}