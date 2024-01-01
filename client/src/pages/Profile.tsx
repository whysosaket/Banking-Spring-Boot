import { useState } from "react";
import Logo from "../assets/logo.png";
import ProfileBalance from "../components/ProfileBalance";
import { motion } from "framer-motion";
import Transactions from "../components/Transactions";


const Profile = () => {

    const [isActivated, setIsActivated] = useState(false);
    const [isBalance, setIsBalance] = useState(false);  
    const [isTransaction, setIsTransaction] = useState(false);

    const handleTransaction = () => {
        setIsActivated(true);
        setIsBalance(false);
        setIsTransaction(true);
    }

    const handleShowBalance = () => {
        setIsActivated(true);
        setIsTransaction(false);
        setIsBalance(true);
    }

  return (
    <>
      <motion.div
      initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
      className="py-16 bg-gray-200 z-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto">
          <div className={`relative flex flex-col min-w-0 break-words -mb-3 border-b-0 bg-white w-full ${!isActivated&&"shadow-lg mb-0 rounded-lg "} mt-16`}>
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={Logo}
                      className="shadow-xl rounded-full h-auto  border-none relative -top-10  max-w-32"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                  Jenna Stones
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                    jennastones@gmail.com
                </div>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                    whysosaket
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4 flex justify-center text-sm md:text-md">
                        <button onClick={handleShowBalance} className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 md:px-4 xl:px-6 py-2 mx-2 rounded">
                          Show Balance
                        </button>
                        <button onClick={handleTransaction} className="bg-rose-500 hover:bg-rose-700 text-white font-bold px-2 md:px-4 xl:px-6 py-2 mx-2 rounded">
                            Show Transactions
                        </button>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          {isBalance&&<ProfileBalance />&&!isTransaction&&<ProfileBalance />}
          {isTransaction&&<Transactions/>&&!isBalance&&<Transactions />}
        </div>

      </motion.div>
    </>
  );
};

export default Profile;