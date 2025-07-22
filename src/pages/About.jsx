export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-50 p-6">
      <h2 className="text-4xl font-extrabold text-amber-800 mb-4">About TravelNest</h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center leading-relaxed">
        <span className="font-semibold">TravelNest</span> is a sleek, drag-and-drop itinerary planner designed to make travel planning simple and enjoyable.
        Whether you're a spontaneous explorer or a meticulous planner, TravelNest helps you organize your daily activities across destinations—beautifully and effortlessly.
        Built with <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>, it securely stores your plans in your browser using <span className="font-semibold">localStorage</span>, so everything stays private and persistent.
      </p>
    </div>
  );
}
