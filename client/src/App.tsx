import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import _404 from "./pages/_404";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import Transfer from "./pages/Transfer";
import { AlertState } from "./context/AlertContext";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";
import { GlobalState } from "./context/GlobalContext";
import BackendStatusChecker from "./components/BackendStatusChecker";



function App() {
  return (
    <>
    <BackendStatusChecker url={`${import.meta.env.VITE_HOST}/user/`} />
    <GlobalState>
      <AlertState>
        <Router>
          <ScrollToTop />
          <Navbar />
          <ToastContainer
            autoClose={2000}
            theme="colored"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="*" element={<_404 />} />
          </Routes>
          <Footer />
        </Router>
      </AlertState>
      </GlobalState>
    </>
  );
}

export default App;
