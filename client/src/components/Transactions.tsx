import {motion} from 'framer-motion'
import Transaction from './Transaction'
import { useContext, useState, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';

const Transactions = () => {
  const {isAuthenticated, getTransactions} = useContext(GlobalContext);
  const [transactions, setTransactions] = useState([{amount: NaN, type: NaN, from: NaN, to: NaN, date: "Date", time: "Time"}]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTransactions();
    };
  }, []);

  const fetchTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  return (
    <div>
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white shadow-xl rounded-lg -z-50 py-3 px-2"
        >
          <h1 className='text-2xl font-semibold text-center my-2'>Total Transactions: {transactions.length}</h1>
            <div className='pt-3' />

<table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Time</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Amount</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-white divide-y-4">
              {transactions.map((transaction, index) => (
                <Transaction key={index} delay={index*2+1} time={transaction.time} to={transaction.to} date={transaction.date} amount={transaction.amount} type={transaction.type}  />
              ))}
            </tbody>
            
          </table>
        </motion.h1>
    </div>
  )
}

export default Transactions