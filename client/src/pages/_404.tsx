import { Link } from "react-router-dom";
import Image from "../assets/_404.svg";
import { motion } from "framer-motion";

const _404 = () => {
  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
      className="flex flex-col justify-center">
        <center className="mx-auto mt-20">
            <img
                className="w-72 h-72"
                src={Image}
                alt=""
            />
          <div className=" tracking-widest mt-4">
            <span className="text-red-500 text-6xl block">
              <span>4 <span className="text-gray-500">0</span> 4</span>
            </span>
            <span className="text-gray-500 text-xl">
              Sorry, We couldn't find what you are looking for!
            </span>
          </div>
          <center className="mt-6">
          <Link
            to="/"
            className="text-white font-mono text-xl bg-rose-600 p-3 rounded-md hover:shadow-lg"
          >
            Go Home
          </Link>
        </center>
        </center>
       
      </motion.div>
    </>
  );
};

export default _404;
