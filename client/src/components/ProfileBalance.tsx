import { motion } from "framer-motion";
const ProfileBalance = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap bg-white shadow-xl rounded-lg -z-50"
      >
        <div className="w-full p-3">
          <div className="bg-gray-100 border border-gray-300 rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded p-3 bg-green-300">
                  <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-400">
                  Total Balance
                </h5>
                <h3 className="font-bold text-3xl text-gray-600">₹ 7310</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProfileBalance;
