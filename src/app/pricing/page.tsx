export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Pricing Plans
        </h1>

        <p className="text-center mt-4 text-gray-600">
          Flexible solutions for individuals and organizations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold">
              Starter
            </h2>

            <p className="text-5xl font-bold mt-6">
              ₦150K
            </p>

            <ul className="mt-8 space-y-3">
              <li>Business Consultation</li>
              <li>Marketing Review</li>
              <li>Strategy Session</li>
            </ul>

          </div>

          <div className="bg-blue-700 text-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold">
              Growth
            </h2>

            <p className="text-5xl font-bold mt-6">
              ₦500K
            </p>

            <ul className="mt-8 space-y-3">
              <li>Tax Advisory</li>
              <li>Financial Review</li>
              <li>Marketing Campaign Setup</li>
              <li>Business Coaching</li>
            </ul>

          </div>

          <div className="bg-white p-8 rounded-xl shadow">

            <h2 className="text-2xl font-bold">
              Enterprise
            </h2>

            <p className="text-5xl font-bold mt-6">
              ₦2M+
            </p>

            <ul className="mt-8 space-y-3">
              <li>Dedicated Consultant</li>
              <li>Software Development</li>
              <li>Audit Support</li>
              <li>Corporate Wellness</li>
              <li>Executive Coaching</li>
            </ul>

          </div>

        </div>

      </div>

    </main>
  );
}