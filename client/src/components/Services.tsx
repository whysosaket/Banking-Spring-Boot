import { Link } from "react-router-dom";
import Image from "../assets/bg.svg";
import { motion, Variants } from "framer-motion";

const Services = () => {
  const variants: Variants = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        className="-z-50 bg-gray-50 flex flex-col pb-10 overflow-hidden"
      >
        <h1 className="text-rose-700 md:text-start w-full p-8 font-bold md:text-5xl/relaxed text-center text-3xl">
          Our Services
        </h1>
        <div className="flex">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob " />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute top-20 right-24 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="m-8 relative space-y-4">
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-7 flex items-center justify-center p-1 w-36 md:w-48 bg-gray-700 rounded">
                    <h1 className="font-semibold text-white">Withdraw Money</h1>
                  </div>
                  <Link to="/withdraw" className="w-24 h-6 rounded-lg bg-rose-700 text-white font-semibold flex justify-center hover:bg-rose-900">
                    Go
                  </Link>
                </div>
              </div>
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-7 flex items-center justify-center p-1 w-36 md:w-48 bg-gray-700 rounded">
                    <h1 className="font-semibold text-white">Deposit Money</h1>
                  </div>
                  <Link to="/deposit" className="w-24 h-6 rounded-lg bg-rose-700 text-white font-semibold flex justify-center hover:bg-rose-900">
                    Go
                  </Link>
                </div>
              </div>
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-7 flex items-center justify-center p-1 w-36 md:w-48 bg-gray-700 rounded">
                    <h1 className="font-semibold text-white">Transfer Funds</h1>
                  </div>
                  <Link to="/transfer" className="w-24 h-6 rounded-lg bg-rose-700 text-white font-semibold flex justify-center hover:bg-rose-900">
                    Go
                  </Link>
                </div>
              </div>
              <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div className="flex-1 flex justify-between items-center">
                  <div className="h-7 flex items-center justify-center p-1 w-36 md:w-48 bg-gray-700 rounded">
                    <h1 className="font-semibold text-white">View Profile</h1>
                  </div>
                  <Link to="/profile" className="w-24 h-6 rounded-lg bg-rose-700 text-white font-semibold flex justify-center hover:bg-rose-900">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="image w-1/2 max-h-96 overflow-hidden hidden md:block">
            <img src={Image} alt="" className="w-full h-full" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
