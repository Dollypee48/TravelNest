import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navLinkStyle = (path) =>
    `px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-amber-600 text-white"
        : "text-gray-700 hover:bg-amber-100"
    }`;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700">TravelNest</h1>
        <div className="space-x-4">
          <Link to="/" className={navLinkStyle("/")}>
            Home
          </Link>
          <Link to="/planner" className={navLinkStyle("/planner")}>
            Planner
          </Link>
          <Link to="/about" className={navLinkStyle("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
