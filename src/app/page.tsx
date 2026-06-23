export default function Home() {
  const services = [
    {
      title: "Tax Consulting",
      desc: "Tax planning, compliance, business registration and regulatory advisory.",
    },
    {
      title: "Finance & Audit",
      desc: "Financial reporting, audit support, risk assessment and business valuation.",
    },
    {
      title: "Software Engineering",
      desc: "Custom web applications, SaaS platforms, APIs and enterprise systems.",
    },
    {
      title: "Website Development",
      desc: "Modern websites, e-commerce stores, NGO and corporate platforms.",
    },
    {
      title: "Digital Marketing",
      desc: "Google Ads, Facebook Ads, lead generation and business growth campaigns.",
    },
    {
      title: "AI & Automation",
      desc: "AI assistants, workflow automation and digital transformation solutions.",
    },
    {
      title: "Corporate Wellness",
      desc: "Employee counselling, burnout prevention and workplace wellness programs.",
    },
    {
      title: "Individual Wellness",
      desc: "Behavioural therapy, personal growth, life coaching and career coaching.",
    },
    {
      title: "Executive Coaching",
      desc: "Leadership development, productivity coaching and strategic guidance.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen">

      {/* TOP BAR */}
      <div className="bg-yellow-400 text-black text-center py-3 font-semibold">
        Tax Consulting • Finance & Audit • Software Development • Digital Marketing • Corporate Wellness • Executive Coaching
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-28">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            Business • Technology • Wellness • Coaching
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight max-w-5xl">
            Helping Businesses and Individuals Grow Through
            Technology, Advisory, Coaching & Wellness
          </h1>

          <p className="mt-8 text-xl max-w-3xl text-blue-100">
            We provide Tax Consulting, Finance & Audit,
            Software Development, Website Design,
            Digital Marketing, Corporate Wellness,
            Individual Coaching and Executive Advisory Services.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://wa.me/2347037819477?text=Hello%20Orbitech%20Business%20Solutions.%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold"
            >
              WhatsApp Us
            </a>

            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold">
              Book Consultation
            </button>

            <button className="border border-white px-8 py-4 rounded-lg">
              Request Proposal
            </button>

          </div>

          <div className="mt-10 space-y-2">
            <p className="text-lg">
              📞 +234 703 781 9477
            </p>

            <p className="text-lg">
              💬 Available on WhatsApp
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-700">
              9+
            </h3>
            <p className="mt-2">
              Professional Services
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-700">
              Business
            </h3>
            <p className="mt-2">
              Advisory Solutions
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-700">
              Tech
            </h3>
            <p className="mt-2">
              Innovation Services
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-4xl font-bold text-blue-700">
              Wellness
            </h3>
            <p className="mt-2">
              Coaching & Support
            </p>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Our Services
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for businesses,
            entrepreneurs, professionals and individuals.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            Why Do Business With Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16">

            <div className="p-8 border rounded-xl">
              <h3 className="text-2xl font-bold">
                One Partner. Multiple Solutions.
              </h3>

              <p className="mt-4 text-gray-600">
                Tax consulting, finance, software engineering,
                digital marketing, coaching and wellness —
                all under one trusted partner.
              </p>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="text-2xl font-bold">
                Technology + Human Development
              </h3>

              <p className="mt-4 text-gray-600">
                We combine business growth strategies
                with technology and personal development.
              </p>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="text-2xl font-bold">
                Corporate & Individual Services
              </h3>

              <p className="mt-4 text-gray-600">
                We support businesses, NGOs, executives,
                entrepreneurs and individuals.
              </p>
            </div>

            <div className="p-8 border rounded-xl">
              <h3 className="text-2xl font-bold">
                Results Driven
              </h3>

              <p className="mt-4 text-gray-600">
                Focused on productivity, profitability,
                compliance, growth and wellbeing.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-slate-100 py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>

          <p className="mt-6 text-gray-600">
            Lets discuss your next project, business challenge
            or wellness program.
          </p>

          <div className="mt-10 space-y-4 text-xl">

            <p>📞 +234 703 781 9477</p>

            <p>
              💬
              <a
                href="https://wa.me/2347037819477"
                target="_blank"
                className="text-green-600 font-semibold ml-2"
              >
                Chat on WhatsApp
              </a>
            </p>

            <p>📧 info@orbitechsolutions.com</p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-900 text-white py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            Book a consultation today and discover how
            Orbitech Business Solutions can help you succeed.
          </p>

          <a
            href="https://wa.me/2347037819477?text=Hello%20Orbitech%20Business%20Solutions.%20I%20need%20a%20consultation."
            target="_blank"
            className="inline-block mt-10 bg-green-500 px-8 py-4 rounded-lg font-semibold"
          >
            Start on WhatsApp
          </a>

        </div>

      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/2347037819477"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl z-50"
      >
        WhatsApp
      </a>

    </main>
  );
}