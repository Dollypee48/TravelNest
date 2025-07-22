import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-yellow-50 to-rose-100">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-amber-800 mb-4">
          Welcome to TravelNest
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Plan your dream trip with ease. Organize destinations, schedule
          activities, and build the perfect travel itinerary in minutes.
        </p>
        <Link to="/planner">
          <button className="bg-amber-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-amber-700 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-700 mb-10">
            Why TravelNest?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Smart Planning
              </h3>
              <p className="text-gray-600">
                Organize your entire trip — from flights to sightseeing — in
                one place.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Easy Drag & Drop
              </h3>
              <p className="text-gray-600">
                Reorder your plans quickly with a flexible itinerary builder.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Beautiful & Shareable
              </h3>
              <p className="text-gray-600">
                Create clean, exportable plans you can share with friends and
                family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-amber-50">
        <h2 className="text-3xl font-bold text-amber-800 mb-4">
          Ready to Plan Your Adventure?
        </h2>
        <p className="text-gray-700 mb-6">
          Get started now and turn your travel ideas into reality!
        </p>
        <Link to="/planner">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-amber-700 transition">
            Start Planning
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t border-gray-200 text-sm text-gray-600">
        © {new Date().getFullYear()} TravelNest. All rights reserved.
      </footer>
    </div>
  );
}
