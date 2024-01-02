import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Hero = () => {
  const {isAuthenticated, handleLogout} = useContext(GlobalContext);
  return (
    <>
      <motion.div
        initial={{ y: -180 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
        className="z-10 relative bg-[url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
      >
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="text-white absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent" >
            {" "}
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center md:text-left">
            <h1
            className="font-extrabold text-5xl/relaxed">
            Discover Your 
              <strong className="block font-extrabold text-rose-700 md:text-5xl/relaxed text-3xl">
              Financial Haven with Us
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Unlock a World of Financial Stability and Personalized Solutions for Your Everlasting Home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              {
                isAuthenticated?
                <button onClick={handleLogout} className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Logout
              </button>
              : <Link
              to="/login"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Login
            </Link>
              }
              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
