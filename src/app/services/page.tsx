export default function ServicesPage() {
  const services = [
    "Tax Consulting",
    "Finance & Audit",
    "Software Engineering",
    "Website Development",
    "Digital Marketing",
    "AI & Automation",
    "Corporate Wellness",
    "Individual Wellness",
    "Executive Coaching",
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Our Services
        </h1>

        <p className="text-center mt-4 text-gray-600">
          Comprehensive business, technology and wellness solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white p-8 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold">
                {service}
              </h2>

              <p className="mt-4 text-gray-600">
                Professional consulting and support services
                tailored to your needs.
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}