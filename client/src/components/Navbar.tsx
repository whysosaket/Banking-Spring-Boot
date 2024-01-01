import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
        className="bg-white shadow-lg h-24 md:flex"
      >
        <a
          href=""
          className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        >
          <img
            className=""
            src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
            alt=""
          />
        </a>
        <nav className="header-links contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center justify-center md:justify-start ml-4 xl:ml-8 mr-auto">
            <li className="p-3 xl:p-6 active">
              <Link to="/">
                <span className="hover:text-rose-500">Home</span>
              </Link>
            </li>
            <li className="p-3 xl:p-6">
              <Link to="/profile">
                <span className="hover:text-rose-500">Profile</span>
              </Link>
            </li>
            <li className="p-3 xl:p-6">
              <Link to="/about">
                <span className="hover:text-rose-500">About</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border items-center px-4 lg:px-6 xl:px-8 hidden md:flex">
          <button className="bg-rose-600  hover:bg-rose-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
            Contact Us
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
