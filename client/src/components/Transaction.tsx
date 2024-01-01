import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Transaction = (props: { type: string; delay: number }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: props.delay / 10.0 }}
      className={`my-8 font-semibold rounded-md bg-${
        props.type === "w" ? "red" : "green"
      }-50 p-6`}
    >
      <td className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              className="rounded-full"
              src={Logo}
              width={40}
              height={40}
              alt="Alex Shatov"
            />
          </div>
          <div className="font-medium text-gray-800">Alex Shatov</div>
        </div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left">alexshatov@gmail.com</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-green-500">$2,890.66</div>
      </td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">??</div>
      </td>
    </motion.tr>
  );
};

export default Transaction;
