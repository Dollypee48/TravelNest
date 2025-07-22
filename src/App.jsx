import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import About from "./pages/About";
import { ItineraryProvider } from "./context/ItineraryContext";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <ItineraryProvider>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </Router>
    </ItineraryProvider>
  );
};

export default App; // ✅ This is what was missing
