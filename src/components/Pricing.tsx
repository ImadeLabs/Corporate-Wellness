export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-8 rounded-xl shadow">

            <h3 className="text-2xl font-bold">
              Bronze
            </h3>

            <p className="text-4xl mt-4">
              ₦300k
            </p>

            <ul className="mt-6 space-y-2">
              <li>Monthly Webinar</li>
              <li>Mental Health Report</li>
              <li>Email Support</li>
            </ul>

          </div>

          <div className="bg-blue-700 text-white p-8 rounded-xl shadow">

            <h3 className="text-2xl font-bold">
              Silver
            </h3>

            <p className="text-4xl mt-4">
              ₦1M
            </p>

            <ul className="mt-6 space-y-2">
              <li>Employee Assessments</li>
              <li>Monthly Coaching</li>
              <li>HR Consultation</li>
            </ul>

          </div>

          <div className="bg-white p-8 rounded-xl shadow">

            <h3 className="text-2xl font-bold">
              Gold
            </h3>

            <p className="text-4xl mt-4">
              ₦2.5M+
            </p>

            <ul className="mt-6 space-y-2">
              <li>Dedicated Therapist</li>
              <li>Executive Coaching</li>
              <li>Crisis Support</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}