export default function Services() {

  const services = [
    "Employee Counselling",
    "Stress Management",
    "Burnout Prevention",
    "Workplace Coaching",
    "Mental Health Workshops",
    "Psychological Assessments",
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {services.map((service) => (
            <div
              key={service}
              className="p-8 rounded-xl shadow-lg border"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-600">
                Professional corporate wellness solutions
                designed to improve workplace performance.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}