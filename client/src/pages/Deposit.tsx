import { useState } from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const year = new Date().getFullYear();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = monthNames[new Date().getMonth()];
const day = new Date().getDate();
const isPhone = window.innerWidth < 768;

const Deposit = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsSuccess(true);
  };

  const cardVarient = {
    initial: {
      scaleY: 1.4,
    },
    final: {
      scaleY: 1,
    }
  };

  return (
    <>
      <div className="flex justify-center antialiased bg-gray-200 text-gray-600 py-24 p-4">
        <motion.div
          initial="initial"
          animate="final"
          variants={cardVarient}
          transition={{ duration: 0.3 }}
          className="md:flex"
        >
          {/* Card */}
          <div className="min-w-[360px] mx-auto">
            <div className="bg-white shadow-lg rounded-lg mt-9">
              {/* Card header */}
              <header className="text-center px-5 pb-5">
                {/* Avatar */}
                <img
                  className="inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
                  src={Logo}
                  alt=""
                />
                {/* Card name */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Deposit Money
                </h3>
                <div className="text-sm font-medium text-gray-500">
                  One tap deposit
                </div>
              </header>
              {/* Card body */}
              
                <div className={`bg-gray-100 text-center px-5 py-6`}>
                  <div className="text-sm mb-6">
                    <strong className="font-semibold">Today</strong> {month}{" "}
                    {day},{" " + year}
                  </div>
                  <div className="space-y-3">
                    <div className="flex-grow">
                      <input
                        name="card-nr"
                        className="text-sm text-gray-800 bg-white rounded-l leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-rose-300 focus:ring-0"
                        type="text"
                        placeholder="Amount"
                        aria-label="Amount"
                      />
                    </div>
                    <div className="flex-grow">
                      <input
                        name="card-nr"
                        className="text-sm text-gray-800 bg-white rounded-l leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-rose-300 focus:ring-0"
                        type="text"
                        placeholder="Iterations"
                        aria-label="Card Number"
                      />
                    </div>
                    <button
                      onClick={handleClick}
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-rose-500 hover:bg-rose-600 text-white focus:outline-none focus-visible:ring-2"
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Deposit;
