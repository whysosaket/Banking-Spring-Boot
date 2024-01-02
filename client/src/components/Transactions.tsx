import {motion} from 'framer-motion'
import Transaction from './Transaction'

const Transactions = () => {
  return (
    <div>
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white shadow-xl rounded-lg -z-50 py-3 px-2"
        >
            <div className='pt-3' />

<table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Type</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-white divide-y-4">
            <Transaction delay={1} type={"d"} />
            <Transaction delay={3} type={"d"} />
            <Transaction delay={5} type={"d"} />
            <Transaction delay={7} type={"w"} />
            <Transaction delay={9} type={"w"} />
            <Transaction delay={11} type={"d"} />
            <Transaction delay={13} type={"w"} />
            </tbody>
            
          </table>
        </motion.h1>
    </div>
  )
}

export default Transactions