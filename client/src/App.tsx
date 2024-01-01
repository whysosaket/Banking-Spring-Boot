import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<_404 />} />
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
